import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'

type Props = {}

export default function FolderDetails({}: Props) {
  return (
		<MainLayout>
			<section className="section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="d-flex align-items-center justify-content-between welcome-content mb-3">
								<h4>All Files</h4>
								<div className="d-flex align-items-center">
									<div className="list-grid-toggle mr-4">
										<span className="icon i-grid icon-grid">
											<i className="ri-layout-grid-line font-size-20"></i>
										</span>
										<span className="icon i-list icon-grid">
											<i className="ri-list-check font-size-20"></i>
										</span>
										<span className="label label-list">Grid</span>
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
												className="iq-dropdown list-inline m-0 p-0 mt-2 collapse"
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
				</div>
			</section>
		</MainLayout>
	)
}