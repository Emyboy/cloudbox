import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { RiArrowRightSLine, RiFolder3Fill } from 'react-icons/ri'
import { db } from '../../firebase'
import { UploadedFile } from '../../types/file.types'
import { UploadedFolder } from '../../types/folder.types'
import BreadCrumb, { BreadCrumbs } from './BreadCrumbs'

type Props = {
	folder: UploadedFolder | undefined
	setActiveFolder: (_id: string) => void
}

export default function MoveToFolder({ folder, setActiveFolder }: Props) {
	const [loading, setLoading] = useState(false)
	const [rootFolders, setRootFolders] = useState<UploadedFolder[]>([])
	const [breadcrumb, setBreadcrumbs] = useState<BreadCrumbs[]>([])
	const [folderList, setFolderList] = useState<UploadedFolder[]>([])

	const getTopLevelFolders = async () => {
		try {
			setLoading(true)
			const filesRef = await collection(db, 'folders')
			const data: any = []
			const q = await query(
				filesRef,
				orderBy('createdAt', 'desc'),
				where('parentFolder', '==', null)
				// limit(8)
			)
			const querySnapshot = await getDocs(q)
			querySnapshot.forEach((doc) => {
				data.push({ ...doc.data(), doc: doc.id })
			})
			console.log('PARENT FOLDERS ---', data)
			setRootFolders(data)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const openFolder = (folder: UploadedFolder) => {
		const _newFolder: BreadCrumbs = {
			_id: folder._id,
			name: folder.name,
		}
		const previousCrumbs: BreadCrumbs[] = [...breadcrumb]
		setBreadcrumbs([...previousCrumbs, _newFolder])
	}

	const getNestedFolders = async (folder_id: string) => {
		setLoading(true)
		const filesRef = await collection(db, 'folders')
		const data: any = []
		const q = await query(
			filesRef,
			orderBy('createdAt', 'desc'),
			where('parentFolder', '==', folder_id)
			// limit(8)
		)
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((doc) => {
			data.push({ ...doc.data(), doc: doc.id })
		})
		setFolderList(data)
		setLoading(false)
	}

	const goToFolder = (folder_id: string) => {
		const _newCrumbs: BreadCrumbs[] = []
		let _break = false
		breadcrumb.forEach((val) => {
			if (val._id === folder_id && !_break) {
				_newCrumbs.push(val)
				_break = true
			}
		})
		setBreadcrumbs(_newCrumbs)
	}

	useEffect(() => {
		getTopLevelFolders()
	}, [])

	useEffect(() => {
		if (breadcrumb.length > 0) {
			getNestedFolders(breadcrumb[breadcrumb.length - 1]._id)
			setActiveFolder(breadcrumb[breadcrumb.length - 1]._id)
		} else {
			setActiveFolder('')
		}
	}, [breadcrumb])

	return (
		<div style={{ minHeight: '500px', maxHeight: '600px' }}>
            <BreadCrumb
                breadcrumbs={breadcrumb}
                goToRoot={() => setBreadcrumbs([])}
                goToFolder={goToFolder}
            />
			{loading ? (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ minHeight: '500px' }}
				>
					<small>Loading...</small>
				</div>
			) : (
				<>
					<div
						className="h-100 bg-danger"
						style={{ maxHeight: '500px', overflowY: 'auto' }}
					>
						{breadcrumb.length === 0 ? (
							<div className="list-group rounded-0">
								{rootFolders.map((val) => {
									return (
										<EachFolder key={val._id} data={val} onClick={openFolder} />
									)
								})}
							</div>
						) : (
							<div className="list-group rounded-0">
								{folderList.map((val) => {
									return (
										<EachFolder key={val._id} data={val} onClick={openFolder} />
									)
								})}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	)
}

const EachFolder = ({
	data,
	onClick,
}: {
	data: UploadedFolder
	onClick: (folder: UploadedFolder) => void
}) => {
	return (
		<button
			className="list-group-item list-group-item-action d-flex justify-content-between"
			onClick={() => onClick(data)}
		>
			<div>
				<RiFolder3Fill size={20} /> <span className="mx-1">{data.name}</span>
			</div>
			<RiArrowRightSLine size={20} className="text-muted" />
		</button>
	)
}
