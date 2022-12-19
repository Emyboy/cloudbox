import Link from 'next/link'
import React from 'react'

type Props = {
	heading: string
	rightText?: string
	rightTextURL?: string
}

export default function SectionHeading({
	heading,
	rightText,
	rightTextURL,
}: Props) {
	return (
		<div className="col-lg-12">
			<div className="card card-block card-stretch card-transparent ">
				<div className="card-header d-flex justify-content-between pb-0">
					<div className="header-title">
						<h4 className="card-title">{heading}</h4>
					</div>
					<div className="card-header-toolbar d-flex align-items-center">
						<Link href={rightTextURL || '/'} className=" view-more">
							{rightText}
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
