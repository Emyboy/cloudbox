import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	where,
} from 'firebase/firestore'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../atoms/Banner'
import EachFolder from '../atoms/EachFolder'
import MainLayout from '../components/Layout/MainLayout'
import SectionList from '../components/SectionList/SectionList'
import { db } from '../firebase'
import { setRecentFiles } from '../redux/reducers/file.reducer'
import { RootState } from '../redux/store'

type Props = {}

export default function Index({}: Props) {
	const dispatch = useDispatch()
	const { user } = useSelector((state: RootState) => state.auth)
	const { recent_files } = useSelector((state: RootState) => state.file)

	useEffect(() => {
		if(user){
			;(async () => {
				const filesRef = await collection(db, 'files')
				const data: any = []
				const q = await query(
					filesRef,
					orderBy('createdAt','desc'),
					where('user', '==', user.email),
					// limit(4)
				)
				const querySnapshot = await getDocs(q)
				querySnapshot.forEach((doc) => {
					data.push({ ...doc.data(), doc: doc.id})
				})
				console.log(data)
				dispatch(setRecentFiles(data))
			})()
		}
	}, [user])

	return (
		<MainLayout>
			<div className="row-">
				<Head>
					<title>CloudBox</title>
				</Head>

				<div className="row">
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
				</div>

				<div className="d-flex flex-column">
					<SectionList heading="Recent Documents" list={recent_files} />
					<SectionList heading="Recent Folders" list={[]} />
					<SectionList heading="Other Items" list={[]} />
				</div>
			</div>
		</MainLayout>
	)
}
