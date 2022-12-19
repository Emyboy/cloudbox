import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode, toggleNav } from '../../redux/reducers/view.reducer'
import { RootState } from '../../redux/store'

type Props = {}

export default function Header({}: Props) {
	const { mode, showNav } = useSelector((state: RootState) => state.view)
	const dispatch = useDispatch()

	useEffect(() => {
		switch (mode) {
			case 'light':
				document.querySelector('body')?.classList.remove('dark')
				document.querySelector('body')?.classList.add(mode)
				break
			case 'dark':
				document.querySelector('body')?.classList.remove('light')
				document.querySelector('body')?.classList.add(mode)
				break

			default:
				break
		}
	}, [mode])

	useEffect(() => {
		console.log('SHOW --', showNav)
		if (showNav) {
			document.querySelector('body')?.classList.add('sidebar-main')
		} else {
			document.querySelector('body')?.classList.remove('sidebar-main')
		}
	}, [showNav])

	return (
		<div className="iq-top-navbar">
			<div className="iq-navbar-custom">
				<nav className="navbar navbar-expand-lg navbar-light p-0">
					<div className="iq-navbar-logo d-flex align-items-center justify-content-between">
						<i
							className={`las la-${showNav ? 'times' : 'bars'} wrapper-menu`}
							onClick={() => dispatch(toggleNav())}
						></i>
						<a href="index.html" className="header-logo">
							{mode === 'light' ? (
								<img
									src="/assets/images/logo.png"
									className="img-fluid rounded-normal light-logo"
									alt="logo"
								/>
							) : (
								<img
									src="/assets/images/logo-white.png"
									className="img-fluid rounded-normal darkmode-logo d-none"
									alt="logo"
								/>
							)}
						</a>
					</div>
					<div className="iq-search-bar device-search">
						<form>
							<div className="input-prepend input-append">
								<div className="btn-group">
									<label
										className="dropdown-toggle searchbox"
										data-toggle="dropdown"
									>
										<input
											className="dropdown-toggle search-query text search-input"
											type="text"
											placeholder="Type here to search..."
										/>
										<span className="search-replace"></span>
										<a className="search-link" href="#">
											<i className="ri-search-line"></i>
										</a>
										<span className="caret"></span>
									</label>
									<ul className="dropdown-menu">
										<li>
											<a href="#">
												<div className="item">
													<i className="far fa-file-pdf bg-info"></i>PDFs
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="item">
													<i className="far fa-file-alt bg-primary"></i>
													Documents
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="item">
													<i className="far fa-file-excel bg-success"></i>
													Spreadsheet
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="item">
													<i className="far fa-file-powerpoint bg-danger"></i>
													Presentation
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="item">
													<i className="far fa-file-image bg-warning"></i>Photos
													&amp; Images
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="item">
													<i className="far fa-file-video bg-info"></i>Videos
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</form>
					</div>

					<div className="d-flex align-items-center">
						<div className="change-mode mr-0 ">
							<div className="custom-control custom-switch custom-switch-icon custom-control-inline">
								<div
									className="custom-switch-inner"
									onClick={() => dispatch(toggleMode())}
								>
									<span className="switch-icon-left">
										<i
											className={`a-left ${
												mode === 'light' ? 'ri-moon-clear-line' : 'ri-sun-line'
											} h3`}
										></i>
									</span>
								</div>
							</div>
						</div>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-label="Toggle navigation"
						>
							<i className="ri-menu-3-line"></i>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ml-auto navbar-list align-items-center">
								<li className="nav-item nav-icon search-content">
									<a
										href="#"
										className="search-toggle rounded"
										id="dropdownSearch"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i className="ri-search-line"></i>
									</a>
									<div
										className="iq-search-bar iq-sub-dropdown dropdown-menu"
										aria-labelledby="dropdownSearch"
									>
										<form action="#" className="searchbox p-2">
											<div className="form-group mb-0 position-relative">
												<input
													type="text"
													className="text search-input font-size-12"
													placeholder="type here to search..."
												/>
												<a href="#" className="search-link">
													<i className="las la-search"></i>
												</a>
											</div>
										</form>
									</div>
								</li>
								<li className="nav-item nav-icon dropdown">
									<a
										href="#"
										className="search-toggle dropdown-toggle"
										id="dropdownMenuButton01"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i className="ri-question-line"></i>
									</a>
									<div
										className="iq-sub-dropdown dropdown-menu"
										aria-labelledby="dropdownMenuButton01"
									>
										<div className="card shadow-none m-0">
											<div className="card-body p-0 ">
												<div className="p-3">
													<a href="#" className="iq-sub-card pt-0">
														<i className="ri-questionnaire-line"></i>Help
													</a>
													<a href="#" className="iq-sub-card">
														<i className="ri-recycle-line"></i>Training
													</a>
													<a href="#" className="iq-sub-card">
														<i className="ri-refresh-line"></i>Updates
													</a>
													<a href="#" className="iq-sub-card">
														<i className="ri-service-line"></i>Terms and Policy
													</a>
													<a href="#" className="iq-sub-card">
														<i className="ri-feedback-line"></i>Send Feedback
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item nav-icon dropdown">
									<a
										href="#"
										className="search-toggle dropdown-toggle"
										id="dropdownMenuButton02"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i className="ri-settings-3-line"></i>
									</a>
									<div
										className="iq-sub-dropdown dropdown-menu"
										aria-labelledby="dropdownMenuButton02"
									>
										<div className="card shadow-none m-0">
											<div className="card-body p-0 ">
												<div className="p-3">
													<a href="#" className="iq-sub-card pt-0">
														<i className="ri-settings-3-line"></i> Settings
													</a>
													<a href="#" className="iq-sub-card">
														<i className="ri-hard-drive-line"></i> Get Drive for
														desktop
													</a>
													<a href="#" className="iq-sub-card">
														<i className="ri-keyboard-line"></i> Keyboard
														Shortcuts
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item nav-icon dropdown caption-content">
									<a
										href="#"
										className="search-toggle dropdown-toggle"
										id="dropdownMenuButton03"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<div className="caption bg-primary line-height">P</div>
									</a>
									<div
										className="iq-sub-dropdown dropdown-menu"
										aria-labelledby="dropdownMenuButton03"
									>
										<div className="card mb-0">
											<div className="card-header d-flex justify-content-between align-items-center mb-0">
												<div className="header-title">
													<h4 className="card-title mb-0">Profile</h4>
												</div>
												<div className="close-data text-right badge badge-primary cursor-pointer ">
													<i className="ri-close-fill"></i>
												</div>
											</div>
											<div className="card-body">
												<div className="profile-header">
													<div className="cover-container text-center">
														<div className="rounded-circle profile-icon bg-primary mx-auto d-block">
															P<a href="#"></a>
														</div>
														<div className="profile-detail mt-3">
															<h5>
																<a href="https://templates.iqonic.design/cloudbox/html/app/user-profile-edit.html">
																	Panny Marco
																</a>
															</h5>
															<p>pannymarco@gmail.com</p>
														</div>
														<a
															href="auth-sign-in.html"
															className="btn btn-primary"
														>
															Sign Out
														</a>
													</div>
													<div className="profile-details mt-4 pt-4 border-top">
														<div className="media align-items-center mb-3">
															<div className="rounded-circle iq-card-icon-small bg-primary">
																A
															</div>
															<div className="media-body ml-3">
																<div className="media justify-content-between">
																	<h6 className="mb-0">Anna Mull</h6>
																	<p className="mb-0 font-size-12">
																		<i>Signed Out</i>
																	</p>
																</div>
																<p className="mb-0 font-size-12">
																	annamull@gmail.com
																</p>
															</div>
														</div>
														<div className="media align-items-center mb-3">
															<div className="rounded-circle iq-card-icon-small bg-success">
																K
															</div>
															<div className="media-body ml-3">
																<div className="media justify-content-between">
																	<h6 className="mb-0">King Poilin</h6>
																	<p className="mb-0 font-size-12">
																		<i>Signed Out</i>
																	</p>
																</div>
																<p className="mb-0 font-size-12">
																	kingpoilin@gmail.com
																</p>
															</div>
														</div>
														<div className="media align-items-center">
															<div className="rounded-circle iq-card-icon-small bg-danger">
																D
															</div>
															<div className="media-body ml-3">
																<div className="media justify-content-between">
																	<h6 className="mb-0">Devid Worner</h6>
																	<p className="mb-0 font-size-12">
																		<i>Signed Out</i>
																	</p>
																</div>
																<p className="mb-0 font-size-12">
																	devidworner@gmail.com
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}
