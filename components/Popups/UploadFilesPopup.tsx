import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
	toggleUploadPopup,
} from '../../redux/reducers/upload.reducer'
import { RootState } from '../../redux/store'
import FileDND from '../Upload/FileDND'

type Props = {}

export default function UploadFilesPopup({}: Props) {
	const dispatch = useDispatch()
	const { showUploadPopup } = useSelector((state: RootState) => state.upload)

	return (
		<Modal show={showUploadPopup} size="xl">
			<Modal.Body>
				<div className="d-flex justify-content-end">
					<button className="btn">
						<i className="las h5 la-times"></i>
					</button>
				</div>
				<FileDND
					done={() => {
						dispatch(toggleUploadPopup())
					}}
				/>
			</Modal.Body>
		</Modal>
	)
}
