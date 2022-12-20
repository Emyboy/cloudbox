import React from 'react'

type Props = {}

export default function EachQueue({}: Props) {
	return (
		<div className="m-0">
			<div className="d-flex align-items-center">
				<div className="icon-small bg-success rounded mr-3">
					<i className="ri-file-excel-line"></i>
				</div>
				<div className="w-100">
					<div className='mb-2 d-flex justify-content-between align-items-center'>
						<h6>File Name</h6>
                        <button className='btn btn-sm'><i className='las la-times'></i></button>
					</div>
					<div className="progress mb-0" style={{ height: '10px' }}>
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: '50%' }}
							// aria-valuenow="50"
							// aria-valuemin="0"
							// aria-valuemax="100"
						>
							50%
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
