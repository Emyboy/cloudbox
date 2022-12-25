import React from 'react'
import { RiFolder2Fill } from 'react-icons/ri'
import { UploadedFolder } from '../types/folder.types'

type Props = {
	data: UploadedFolder
}

export default function EachFolder({data}: Props) {
  return (
		<div className="col-lg-3 col-md-6 col-sm-6">
			<div className="card card-block card-stretch card-height">
				<div className="card-body image-thumb">
					<a href="#">
						<div className="mb-4 text-center p-3 rounded iq-thumb">
							<div className="iq-image-overlay"></div>
							<RiFolder2Fill size={100} className='text-danger' />
						</div>
						<h6>{data.name}</h6>
					</a>
				</div>
			</div>
		</div>
	)
}