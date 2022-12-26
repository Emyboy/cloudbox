import React, { useState } from 'react'
import { UploadedFile } from '../types/file.types'
import { Dropdown } from 'react-bootstrap'
import { IconBaseProps } from 'react-icons'
import { FileService } from '../services/file.service'
import {
	RiDeleteBin6Line,
	RiDownloadLine,
	RiFolderSharedLine,
	RiStackshareLine,
	RiStarLine,
} from 'react-icons/ri'
import MoveToFolderPopup from '../components/Popups/MoveToFolderPopup'
import { UploadedFolder } from '../types/folder.types'

type Props = {
	fileData?: UploadedFile
	folderData?: UploadedFolder
	setDeleted?: (e: boolean) => void
}

export default function ActionOptions({ setDeleted, fileData, folderData }: Props) {
	const [showMove, setShowMove] = useState(false)

	const deleteFile = async () => {
		if (fileData && setDeleted) {
			try {
				await FileService.deleteFile(fileData.doc, fileData)
				setDeleted(true)
			} catch (error) {
				setDeleted(false)
				return Promise.reject(error)
			}
		}
	}

	if (!fileData) {
		return null
	}

	return (
		<>
			{showMove && <MoveToFolderPopup folderData={folderData} handleClose={() => setShowMove(false)} />}
			<Dropdown>
				<Dropdown.Toggle
					variant="ghost"
					id="dropdown-basic"
					className="p-0 btn"
					as="button"
				>
					<i className="ri-more-2-fill"></i>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<EachOption
						Icon={(e) => <RiStackshareLine {...e} />}
						text="Share"
						onClick={() => {}}
					/>
					<EachOption
						Icon={(e) => <RiFolderSharedLine {...e} />}
						text="Move To"
						onClick={() => setShowMove(true)}
					/>
					<EachOption
						Icon={(e) => <RiStarLine {...e} />}
						text="Add To Favorite"
						onClick={() => {}}
					/>
					<EachOption
						Icon={(e) => <RiDownloadLine {...e} />}
						text="Download"
						onClick={() => {}}
					/>
					<hr className="m-0" />
					<EachOption
						Icon={(e) => <RiDeleteBin6Line {...e} />}
						text="Move To Trash"
						onClick={() => deleteFile()}
						// size={21}
					/>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}

const EachOption = ({
	Icon,
	text,
	onClick,
	size,
}: {
	Icon: (p: IconBaseProps) => React.ReactElement
	text: string
	onClick: () => void
	size?: number
}) => {
	return (
		<Dropdown.Item onClick={onClick}>
			<div className="d-flex align-items-center my-2">
				<Icon size={size || 20} />
				<p className="mb-0 mx-2">{text}</p>
			</div>
		</Dropdown.Item>
	)
}
