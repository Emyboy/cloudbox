import React from 'react'
import EachQueue from './EachQueue'
import { useWindowSize } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { IoIosArrowUp } from 'react-icons/io'
import { toggleUploadQueue } from '../../redux/reducers/upload.reducer'

type Props = {}

export default function UploadQueue({}: Props) {
	const { width } = useWindowSize()
	const { uploadQueue, showUploadQueue } = useSelector(
		(state: RootState) => state.upload
	)
	const dispatch = useDispatch()

	if (uploadQueue.length === 0) {
		return null
	}

	return (
		<>
			<button
				onClick={() => dispatch(toggleUploadQueue())}
				className="btn btn-primary px-3 py-3 rounded-circle shadow blur-shadow shadow-showcase"
				style={{ position: 'fixed', bottom: 15, right: 15, zIndex: 60 }}
			>
				<IoIosArrowUp size={30} />
			</button>
			<div
				className={`card border mb-0 shadow blur-shadow shadow-showcase animate__faster animate__animated ${
					showUploadQueue ? 'animate__slideInUp' : 'animate__slideOutDown'
				} `}
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
					<button className="btn" onClick={() => dispatch(toggleUploadQueue())}>
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
		</>
	)
}
