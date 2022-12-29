import React from 'react'
import EachFile from '../../../atoms/EachFile'
import { UploadedFile } from '../../../types/file.types'
import { UploadedFolder } from '../../../types/folder.types'

type Props = {
    files: UploadedFile[],
    folders: UploadedFolder[],
    folder: UploadedFolder
}

export default function FolderPreview({files,folders, folder}: Props) {
  return (
		<section>
            <div className='container'>
			<div className="row">
				<div className="col-lg-12">
					<div className="d-flex align-items-center justify-content-between welcome-content mb-3">
						<h4>{folder.name}</h4>
						<div className="d-flex align-items-center">
							<div className="list-grid-toggle mr-4">
								<span className="icon icon-grid i-grid">
									<i className="ri-layout-grid-line font-size-20"></i>
								</span>
								<span className="icon icon-grid i-list">
									<i className="ri-list-check font-size-20"></i>
								</span>
								<span className="label label-list">List</span>
							</div>
							<div className="dashboard1-dropdown d-flex align-items-center">
								<div className="dashboard1-info rounded">
									<a
										href="#calander"
										className="collapsed"
										data-toggle="collapse"
										aria-expanded="false"
									>
										<i className="ri-arrow-down-s-line"></i>
									</a>
									<ul
										id="calander"
										className="iq-dropdown collapse list-inline m-0 p-0 mt-2"
									>
										<li className="mb-2">
											<a
												href="#"
												data-toggle="tooltip"
												data-placement="right"
												title=""
												data-original-title="Calander"
											>
												<i className="las la-calendar iq-arrow-left"></i>
											</a>
										</li>
										<li className="mb-2">
											<a
												href="#"
												data-toggle="tooltip"
												data-placement="right"
												title=""
												data-original-title="Keep"
											>
												<i className="las la-lightbulb iq-arrow-left"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												data-toggle="tooltip"
												data-placement="right"
												title=""
												data-original-title="Tasks"
											>
												<i className="las la-tasks iq-arrow-left"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
                <div className='row'>
                    {
                        files.map(val => {
                            return <EachFile key={`_del-${val.uuid}`} data={val} />
                        })
                    }
                </div>
            </div>
		</section>
	)
}

