import React from 'react'

type Props = {}

export default function Banner({}: Props) {
  return (
		<div className="col-lg-8">
			<div
				className="card card-block card-stretch card-height iq-welcome"
				style={{
					background: `url(../assets/images/layouts/mydrive/background.png) no-repeat scroll right center`,
					backgroundColor: '#fff',
					backgroundSize: 'contain',
				}}
			>
				<div className="card-body property2-content">
					<div className="d-flex flex-wrap align-items-center">
						<div className="col-lg-6 col-sm-6 p-0">
							<h3 className="mb-3">Welcome Penny</h3>
							<p className="mb-5">
								You have 32 new notifications and 23 unread messages to reply
							</p>
							<a href="#">
								Try Now<i className="las la-arrow-right ml-2"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}