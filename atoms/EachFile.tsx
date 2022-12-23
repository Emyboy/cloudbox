import React, { useState } from 'react'
import { UploadedFile } from '../types/file.types'
import { AiFillFile, AiFillFileImage, AiFillFilePdf } from 'react-icons/ai'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap'
import { IconBaseProps } from 'react-icons'
import { FaTrash } from 'react-icons/fa'
import { MdDriveFileMove, MdShare } from 'react-icons/md'
import { FileService } from '../services/file.service'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

type Props = {
	data: UploadedFile
}

export default function EachFile({ data }: Props) {
	const { user } = useSelector((state: RootState) => state.auth)
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

	const deleteFile = async () => {
		try {
			await FileService.deleteFile(data.doc, data)
			setDeleted(true)
		} catch (error) {
			setDeleted(false)
			return Promise.reject(error)
		}
	}

	if (deleted) {
		return null
	}

	return (
		<div className="col-lg-3 col-md-6 col-sm-6">
			<div className="card card-block card-stretch card-height">
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
								<Dropdown>
									<Dropdown.Toggle
										variant="ghost"
										id="dropdown-basic"
										className="p-0 btn"
										as="button"
									>
										<i className="ri-more-2-fill"></i>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<EachOption
											Icon={(e) => <MdShare {...e} />}
											text="Share"
											onClick={() => {}}
										/>
										<EachOption
											Icon={(e) => <MdDriveFileMove {...e} />}
											text="Move To"
											onClick={() => {}}
										/>
										<hr className="m-0" />
										<EachOption
											Icon={(e) => <FaTrash {...e} />}
											text="Move To Trash"
											onClick={() => deleteFile()}
											size={21}
										/>
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

const EachOption = ({
	Icon,
	text,
	onClick,
	size,
}: {
	Icon: (p: IconBaseProps) => React.ReactElement
	text: string
	onClick: () => void
	size?: number
}) => {
	return (
		<Dropdown.Item onClick={onClick}>
			<div className="d-flex align-items-center my-2">
				<Icon size={size || 26} />
				<p className="mb-0 mx-2">{text}</p>
			</div>
		</Dropdown.Item>
	)
}
