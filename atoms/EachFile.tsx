import React, { useState } from 'react'
import { UploadedFile } from '../types/file.types'
import { AiFillFile, AiFillFileImage, AiFillFilePdf } from 'react-icons/ai'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap'

type Props = {
	data: UploadedFile
}

export default function EachFile({ data }: Props) {
	const [showOptions, setShowOptions] = useState(false)
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

	return (
		<div className="col-lg-3 col-md-6 col-sm-6">
			<div className="card card-block card-stretch card-height">
				<div className="card-body image-thumb">
					<a href="#">
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
								
								<Dropdown>
									<Dropdown.Toggle variant="ghost" id="dropdown-basic">
										<i className="ri-more-2-fill"></i>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											Another action
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											Something else
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
