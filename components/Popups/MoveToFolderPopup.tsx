import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { RiArrowLeftSLine, RiCloseFill } from 'react-icons/ri'
import { UploadedFile } from '../../types/file.types'
import { UploadedFolder } from '../../types/folder.types'
import MoveToFolder from '../Folder/MoveToFolder'

type Props = {
	folderData?: UploadedFolder | null,
	fileData?: UploadedFile | null,
    handleClose: () => void
}

export default function MoveToFolderPopup({ folderData, handleClose, fileData }: Props) {
	const iconSize = 35;


	return (
		<Modal show={true}>
			<Modal.Header className="px-2">
				<div className="d-flex justify-content-between w-100">
					<div className="d-flex align-items-center">
						{/* <button className="btn p-0">
							<RiArrowLeftSLine size={iconSize} />
						</button> */}
						<h5 className="ml-1 fw-bold">Move To Folder</h5>
					</div>
					<div>
						<button className="btn p-0" onClick={handleClose}>
							<RiCloseFill size={iconSize} />
						</button>
					</div>
				</div>
			</Modal.Header>
			<Modal.Body className="p-0">
				<MoveToFolder
					folder={folderData}
					file={fileData}
					done={() => handleClose()}
				/>
			</Modal.Body>
		</Modal>
	)
}
