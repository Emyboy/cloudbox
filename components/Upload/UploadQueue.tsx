import React, { useEffect, useState } from 'react'
import EachQueue from './EachQueue'
import { useWindowSize } from 'react-use'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

export default function UploadQueue({}: Props) {
	const { width } = useWindowSize()
	const [show, setShow] = useState(false)
	const { uploadQueue } = useSelector((state: RootState) => state.upload)

	useEffect(() => {
		setShow(true)
	}, [])

	if (!show) {
		return null
	}

	if (uploadQueue.length < 0) {
		return false
	}
	return (
		<div
			className="card border mb-0 shadow "
			style={{
				position: 'fixed',
				bottom: width < 780 ? 0 : 15,
				right: width < 780 ? 0 : 15,
				minHeight: '50vh',
				maxHeight: '50vh',
				minWidth: width < 780 ? '100vw' : '600px',
				width: width < 780 ? '100vw' : '500px',
				zIndex: 70,
			}}
		>
			<div className="d-flex px-3 pt-3 justify-content-between align-items-center">
				<h5>Upload Queue</h5>
				<button className="btn" onClick={() => {}}>
					<i className="las la-angle-down"></i>
				</button>
			</div>
			<div className="card-body" style={{ overflowY: 'auto' }}>
				<ul className="list-group pb-5">
					{uploadQueue.map((val, i) => {
						return (
							<li className="list-group-item" key={`_queue_-${i}`}>
								<EachQueue data={val} />
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
