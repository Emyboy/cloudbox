import React, { useEffect, useState } from 'react'
import { FileData } from '../../types/file.types'
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
} from 'firebase/storage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { useWindowSize } from 'react-use'
import { FileService } from '../../services/file.service'
import { setRecentFiles } from '../../redux/reducers/file.reducer'
import { markQueueAsDone } from '../../redux/reducers/upload.reducer'

type Props = {
	data: FileData
}

export default React.memo(function EachQueue({ data }: Props) {
	const { user } = useSelector((state: RootState) => state.auth)
	const { recent_files } = useSelector((state: RootState) => state.file)
	const { width } = useWindowSize()
	const dispatch = useDispatch()

	const [progress, setProgress] = useState(data.isDone ? 100 : 0)

	const startUpload = async () => {
		try {
			const storage = getStorage()
			const storageRef = ref(storage, `files/${user?.email}/${data.name}`)

			let blob = await fetch(data.file).then((r) => r.blob())

			const uploadTask = uploadBytesResumable(storageRef, blob)
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					// console.log('Upload is ' + progress + '% done')
					setProgress(progress)
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
					}
				},
				(error) => {
					// Handle unsuccessful uploads
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						// console.log('File available at', downloadURL)
						const newFile: any = await FileService.addFile(
							data.name,
							user?.email,
							downloadURL,
							data.type,
							data.size
						)
						console.log('THE NEW FILE --', newFile)
						dispatch(setRecentFiles([newFile, ...recent_files]))
					})
					dispatch(markQueueAsDone(data.index))
				}
			)
		} catch (error) {
			console.log('UPLOAD ERROR ---', error)
			return Promise.reject(error)
		}
	}

	useEffect(() => {
		if (!data.isDone) {
			startUpload()
		}
	}, [data.isDone])

	useEffect(() => {
		if(data.isDone){
			// setProgress(100)
		}
	},[])

	return (
		<div className="m-0">
			<div className="d-flex align-items-center">
				<div className="icon-small bg-success rounded mr-3">
					<i className="ri-file-excel-line"></i>
				</div>
				<div className="w-100">
					<div className="mb-2 d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<h6>
								{data.name.length > (width < 600 ? 13 : 30)
									? data.name.slice(0, width < 600 ? 13 : 30) + '..'
									: data.name}
							</h6>
							{data.isDone && (
								<BsFillCheckCircleFill className="mx-2 text-success" />
							)}
						</div>
						<button className="btn btn-sm">
							<i className="las la-times"></i>
						</button>
					</div>
					<div className="progress mb-0" style={{ height: '10px' }}>
						<div
							className={`progress-bar ${data.isDone && 'bg-success'}`}
							role="progressbar"
							style={{ width: `${progress}%` }}
							// aria-valuenow="50"
							// aria-valuemin="0"
							// aria-valuemax="100"
						>
							{Math.floor(progress)}%
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})
