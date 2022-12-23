import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleUploadPopup } from '../../redux/reducers/upload.reducer'
import { toggleNav } from '../../redux/reducers/view.reducer'
import { RootState } from '../../redux/store'

type Props = {}

export default function SideNav({}: Props) {
	const { mode } = useSelector((state: RootState) => state.view)
	const dispatch = useDispatch()

	const [showCreate, setShowCreate] = useState(false)

	return (
		<div className="iq-sidebar  sidebar-default" style={{ zIndex: 10 }}>
			<div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
				<a className="header-logo">
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
				<div
					className="iq-menu-bt-sidebar"
					onClick={() => dispatch(toggleNav())}
				>
					<i className="las la-bars wrapper-menu"></i>
				</div>
			</div>
			<div
				className="data-scrollbar"
				data-scroll="1"
				data-scrollbar="true"
				tabIndex={-1}
				style={{ overflow: 'hidden', outline: 'none' }}
			>
				<div className="scroll-content">
					<div className="new-create select-dropdown input-prepend input-append">
						<div className="btn-group">
							<div data-toggle="dropdown" onClick={() => setShowCreate(true)}>
								<div className="search-query selet-caption">
									<i className="las la-plus pr-2"></i>Create New
								</div>

								<span className="caret"></span>
							</div>
							<ul
								className={`dropdown-menu ${showCreate && 'show'}`}
								style={{ zIndex: 100 }}
							>
								<li>
									<div className="item">
										<i className="ri-folder-add-line pr-3"></i>New Folder
									</div>
								</li>
								<li onClick={() => {
									dispatch(toggleUploadPopup());
									setShowCreate(false);
								}}>
									<div className="item">
										<i className="ri-file-upload-line pr-3"></i>Upload Files
									</div>
								</li>
							</ul>
							{showCreate && (
								<span
									className="search-replace p-5"
									onClick={() => setShowCreate(false)}
									style={{
										position: 'fixed',
										left: 0,
										right: 0,
										bottom: 0,
										top: 10,
										zIndex: 99,
									}}
								></span>
							)}
						</div>
					</div>
					<nav className="iq-sidebar-menu">
						<ul id="iq-sidebar-toggle" className="iq-menu">
							<li className="active">
								<a href="index.html" className="">
									<i className="las la-home iq-arrow-left"></i>
									<span>Dashboard</span>
								</a>
								<ul
									id="dashboard"
									className="iq-submenu collapse"
									data-parent="#iq-sidebar-toggle"
								></ul>
							</li>
							<li className="">
								<a
									href="#mydrive"
									className="collapsed"
									data-toggle="collapse"
									aria-expanded="false"
								>
									<i className="las la-hdd"></i>
									<span>My Drive</span>
									<i className="las la-angle-right iq-arrow-right arrow-active"></i>
									<i className="las la-angle-down iq-arrow-right arrow-hover"></i>
								</a>
								<ul
									id="mydrive"
									className="iq-submenu collapse"
									data-parent="#iq-sidebar-toggle"
								>
									<li className=" ">
										<a href="page-alexa.html">
											<i className="lab la-blogger-b"></i>
											<span>Alexa Workshop</span>
										</a>
									</li>
									<li className=" ">
										<a href="page-android.html">
											<i className="las la-share-alt"></i>
											<span>Android</span>
										</a>
									</li>
									<li className=" ">
										<a href="page-brightspot.html">
											<i className="las la-icons"></i>
											<span>Brightspot</span>
										</a>
									</li>
									<li className=" ">
										<a href="page-ionic.html">
											<i className="las la-icons"></i>
											<span>Ionic Chat App</span>
										</a>
									</li>
								</ul>
							</li>
							<li className="">
								<a href="page-files.html" className="">
									<i className="lar la-file-alt iq-arrow-left"></i>
									<span>Files</span>
								</a>
								<ul
									id="page-files"
									className="iq-submenu collapse"
									data-parent="#iq-sidebar-toggle"
								></ul>
							</li>
							<li className="">
								<a href="page-folders.html" className="">
									<i className="las la-stopwatch iq-arrow-left"></i>
									<span>Recent</span>
								</a>
								<ul
									id="page-folders"
									className="iq-submenu collapse"
									data-parent="#iq-sidebar-toggle"
								></ul>
							</li>
							<li className="">
								<a href="page-favourite.html" className="">
									<i className="lar la-star"></i>
									<span>Favourite</span>
								</a>
								<ul
									id="page-fevourite"
									className="iq-submenu collapse"
									data-parent="#iq-sidebar-toggle"
								></ul>
							</li>
							<li className="">
								<a href="page-delete.html" className="">
									<i className="las la-trash-alt iq-arrow-left"></i>
									<span>Trash</span>
								</a>
								<ul
									id="page-delete"
									className="iq-submenu collapse"
									data-parent="#iq-sidebar-toggle"
								></ul>
							</li>
						</ul>
					</nav>
					<div className="sidebar-bottom">
						<h4 className="mb-3">
							<i className="las la-cloud mr-2"></i>Storage
						</h4>
						<p>17.1 / 20 GB Used</p>
						<div className="iq-progress-bar mb-3">
							<span
								className="bg-primary iq-progress progress-1"
								data-percent="67"
								style={{ transition: 'width 2s ease 0s', width: '67%' }}
							></span>
						</div>
						<p>75% Full - 3.9 GB Free</p>
						<a href="#" className="btn btn-outline-primary view-more mt-4">
							Buy Storage
						</a>
					</div>
					<div className="p-3"></div>
				</div>
				<div
					className="scrollbar-track scrollbar-track-x"
					style={{ display: 'none' }}
				>
					<div
						className="scrollbar-thumb scrollbar-thumb-x"
						style={{ width: '260px', transform: 'translate3d(0px, 0px, 0px)' }}
					></div>
				</div>
				<div
					className="scrollbar-track scrollbar-track-y"
					style={{ display: 'block' }}
				>
					<div
						className="scrollbar-thumb scrollbar-thumb-y"
						style={{
							height: '398.069px',
							transform: 'translate3d(0px, 0px, 0px)',
						}}
					></div>
				</div>
			</div>
		</div>
	)
}
