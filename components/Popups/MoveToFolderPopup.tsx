import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { RiArrowLeftSLine, RiCloseFill } from 'react-icons/ri'
import { UploadedFolder } from '../../types/folder.types'
import MoveToFolder from '../Folder/MoveToFolder'

type Props = {
	folderData: UploadedFolder | undefined
}

export default function MoveToFolderPopup({ folderData }: Props) {
	const iconSize = 35;

    const [activeFolder, setActiveFolder] = useState<string>('');

	return (
		<Modal show={true}>
			<Modal.Header className="px-2">
				<div className="d-flex justify-content-between w-100">
					<div className="d-flex align-items-center">
						<button className="btn p-0">
							<RiArrowLeftSLine size={iconSize} />
						</button>
						<h5 className="ml-1 fw-bold">Move To Folder</h5>
					</div>
					<div>
						<button className="btn p-0">
							<RiCloseFill size={iconSize} />
						</button>
					</div>
				</div>
			</Modal.Header>
			<Modal.Body className="p-0">
				<MoveToFolder folder={folderData} setActiveFolder={e => setActiveFolder(e)} />
			</Modal.Body>
			<Modal.Footer>
				<button disabled={!activeFolder} className="btn btn-primary">Move Here</button>
			</Modal.Footer>
		</Modal>
	)
}
