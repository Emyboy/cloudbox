import React from 'react'

type Props = {}

export default function EachFile({}: Props) {
	return (
		<div className="col-lg-3 col-md-6 col-sm-6">
			<div className="card card-block card-stretch card-height">
				<div className="card-body image-thumb">
					<a href="#">
						<div className="mb-4 text-center p-3 rounded iq-thumb">
							<div className="iq-image-overlay"></div>
							<img
								src="../assets/images/layouts/page-1/pdf.png"
								className="img-fluid"
								alt="image1"
							/>
						</div>
						<h6>Terms.pdf</h6>
					</a>
				</div>
			</div>
		</div>
	)
}
