import React from 'react'
import Header from './Header'
import SideNav from './SideNav'

type Props = {
	children: React.ReactElement
}

export default function MainLayout({ children }: Props) {
	return (
		<>
			<SideNav />
			<Header />
			<div className="content-page">
				<div className="container-fluid">{children}</div>
			</div>
		</>
	)
}
