import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { RiArrowRightSLine, RiFolder3Fill } from 'react-icons/ri'
import { db } from '../../firebase'
import { UploadedFile } from '../../types/file.types'
import { UploadedFolder } from '../../types/folder.types'
import BreadCrumb, { BreadCrumbs } from './BreadCrumbs'

type Props = {
	data: UploadedFolder | undefined
}

export default function MoveToFolder({ data }: Props) {
	const [loading, setLoading] = useState(false)
	const [rootFolders, setRootFolders] = useState<UploadedFolder[]>([])
	const [breadcrumb, setBreadcrumbs] = useState<BreadCrumbs[]>([])

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

	console.log(breadcrumb)

	const getNestedFolders = async (folder: UploadedFolder) => {}

	useEffect(() => {
		getTopLevelFolders()
	}, [])

	return (
		<div style={{ minHeight: '400px' }}>
			{loading ? (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ minHeight: '400px' }}
				>
					<small>Loading...</small>
				</div>
			) : (
				<>
					<BreadCrumb
						breadcrumbs={breadcrumb}
						goToRoot={() => setBreadcrumbs([])}
					/>
					<div className="list-group rounded-0">
						{rootFolders.map((val) => {
							return (
								<EachFolder key={val._id} data={val} onClick={openFolder} />
							)
						})}
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
