import React, { FormEvent, ReactHTMLElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilesToQueue } from '../../redux/reducers/upload.reducer'
import { RootState } from '../../redux/store'
import { FileData } from '../../types/file.types'

type Props = {
	done: () => void
}

export default function FileDND({ done }: Props) {
	const dispatch = useDispatch()
	const { user } = useSelector((state: RootState) => state.auth)
	const { uploadQueue } = useSelector((state: RootState) => state.upload)

	const handleFileSelect = (e: any[]) => {
		const newQueue: FileData[] = []

		for (let i = 0; i < e.length; i++) {
			newQueue.push({
				index: uploadQueue.length - 1,
				file: URL.createObjectURL(e[i]),
				name: e[i].name,
				size: e[i].size,
				type: e[i].type,
				user: user?.uid,
				isDone: false,
			})
		}

		dispatch(addFilesToQueue(newQueue))
		done()
	}

	return (
		<>
			<label
				htmlFor="label"
				style={{
					height: '50vh',
					background: '#dde1ff',
					borderStyle: 'dashed',
					borderWidth: '4px',
					borderColor: '#b8bee7',
					color: '#b8bee7',
					borderRadius: '15px',
					cursor: 'pointer',
				}}
				className=" d-flex flex-column align-items-center justify-content-center"
			>
				<h5 style={{ color: '#6e7de2' }} className="fw-bold h3">
					Drag and Drop Files Here
				</h5>
			</label>
			<input
				type="file"
				id="label"
				hidden
				multiple
				onChange={(e: any) => handleFileSelect(e.target.files)}
			/>
		</>
	)
}
