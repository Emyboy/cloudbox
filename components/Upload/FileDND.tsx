import React, { FormEvent, ReactHTMLElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilesToQueue } from '../../redux/reducers/upload.reducer'
import { RootState } from '../../redux/store';

type Props = {}

export default function FileDND({}: Props) {
	const dispatch = useDispatch();
	const { user } = useSelector((state:RootState) => state.auth);
	const handleFileSelect = (e: any[]) => {
		dispatch(addFilesToQueue(e))
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
				onChange={(e:any) => handleFileSelect(e.target.files)}
			/>
		</>
	)
}
