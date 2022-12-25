import React from 'react'
import { Modal } from 'react-bootstrap'
import { RiCloseFill } from 'react-icons/ri'
import CreateFolderForm from '../Folder/CreateFolderForm'

export default function CreateFolderPopup({ show, onClose }: { show: boolean, onClose: () => void }) {
	return (
		<Modal show={show}>
			<Modal.Header className="d-flex justify-content-end">
				<button className='btn p-0' onClick={onClose}>
					<RiCloseFill className="h3 mb-0 text-primary" />
				</button>
			</Modal.Header>
			<Modal.Body>
				<CreateFolderForm done={onClose} />
			</Modal.Body>
		</Modal>
	)
}
