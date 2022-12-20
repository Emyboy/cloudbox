import React from 'react'
import EachQueue from './EachQueue'

type Props = {}

export default function UploadQueue({}: Props) {
	return (
		<div
			className="card border mb-0 shadow "
			style={{
				position: 'fixed',
				bottom: 15,
				right: 15,
				minHeight: '50vh',
				maxHeight: '50vh',
				minWidth: '35vw',
				zIndex: 70,
			}}
		>
            <div className='d-flex px-3 pt-3 justify-content-between align-items-center'>
                <h5>Upload Queue</h5>
                <button className='btn'><i className='las la-angle-down'></i></button>
            </div>
			<div className="card-body" style={{ overflowY: 'auto' }}>
				<ul className="list-group">
					<li className="list-group-item">
						<EachQueue />
					</li>
					<li className="list-group-item">
						<EachQueue />
					</li>
					<li className="list-group-item">
						<EachQueue />
					</li>
				</ul>
			</div>
		</div>
	)
}
