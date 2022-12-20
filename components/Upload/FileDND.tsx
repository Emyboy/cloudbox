import React, { FormEvent, ReactHTMLElement } from 'react'

type Props = {}

export default function FileDND({}: Props) {
	const handleFileSelect = (e: FileList | null) => {
		console.log(e)
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
				onChange={(e) => handleFileSelect(e.target.files)}
			/>
		</>
	)
}
