import React, { useState } from 'react'
import { UploadedFile } from '../types/file.types'
import {
	AiFillFile,
	AiFillFileImage,
	AiFillFilePdf,
	AiFillStar,
} from 'react-icons/ai'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

import ActionOptions from './ActionOptions'

type Props = {
	data: UploadedFile
}

export default function EachFile({ data }: Props) {
	const [deleted, setDeleted] = useState(false)

	const renderPreview = () => {
		const size = 100
		if (data.type.includes('image')) {
			return <AiFillFileImage size={size} className="text-blue" />
		} else if (data.type.includes('pdf')) {
			return <AiFillFilePdf size={size} className="text-danger" />
		} else if (data.type.includes('audio')) {
			return <BsFillFileEarmarkMusicFill size={size} className="text-purple" />
		} else {
			return <AiFillFile size={size} />
		}
	}

	if (deleted) {
		return null
	}

	return (
		<div className="col-lg-3 col-md-6 col-sm-6">
			<div className="card card-block card-stretch card-height">
				{data.isFavorite && (
					<AiFillStar
						className="text-warning position-absolute"
						size={20}
						style={{ left: 20, top: 20, zIndex: 10 }}
					/>
				)}
				<div className="card-body image-thumb">
					<a>
						<div className="mb-4 text-center p-3 rounded iq-thumb">
							<div className="iq-image-overlay"></div>
							{/* <img
								src="../assets/images/layouts/page-1/pdf.png"
								className="img-fluid"
								alt="image1"
							/> */}
							{renderPreview()}
						</div>
						<div className="d-flex justify-content-between">
							<h6>
								{data.name.length > 25
									? data.name.slice(0, 25) + '...'
									: data.name}
							</h6>
							<div className="card-header-toolbar">
								<ActionOptions
									fileData={data}
									setDeleted={(e) => setDeleted(e)}
								/>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
