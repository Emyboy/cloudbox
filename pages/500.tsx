import Link from 'next/link'
import React from 'react'

type Props = {}

export default function ServerError({}: Props) {
	return (
		<div className="container">
			<div className="row no-gutters height-self-center">
				<div className="col-sm-12 text-center align-self-center">
					<div className="iq-error position-relative">
						<img
							src="/assets/images/error/500.png"
							className="img-fluid iq-error-img"
							alt=""
						/>
						<h2 className="mb-0">Oops! This Page is Not Working.</h2>
						<p>The requested is Internal Server Error.</p>
						<Link
							className="btn btn-primary d-inline-flex align-items-center mt-3"
							href="/"
						>
							<i className="ri-home-4-line"></i>Back to Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
