import Head from 'next/head'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../atoms/Banner'
import EachFolder from '../atoms/EachFolder'
import MainLayout from '../components/Layout/MainLayout'
import SectionList from '../components/SectionList/SectionList'

type Props = {}

export default function index({}: Props) {
	

	return (
		<MainLayout>
			<div className="row">
				<Head>
					<title>CloudBox</title>
				</Head>

				<Banner />
				<div className="col-lg-4">
					<div className="card card-block card-stretch card-height  plan-bg">
						<div className="card-body">
							<h4 className="mb-3 text-white">Unlock Your plan</h4>
							<p>
								Expanded Storage, Access To
								<br /> More Features On CloudBOX
							</p>
							<div className="row align-items-center justify-content-between">
								<div className="col-6 go-white ">
									<a href="#" className="btn d-inline-block mt-5">
										Go Premium
									</a>
								</div>
								<div className="col-6">
									<img
										src="../assets/images/layouts/mydrive/lock-bg.png"
										className="img-fluid"
										alt="image1"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<SectionList heading="Recent Documents" list={[]} />
				<SectionList heading="Recent Folders" list={[]} />
				<SectionList heading="Other Items" list={[]} />
			</div>
		</MainLayout>
	)
}
