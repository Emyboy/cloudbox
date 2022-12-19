import React from 'react'
import EachFile from '../../atoms/EachFile'
import SectionHeading from '../../atoms/SectionHeading'

type Props = {
	heading: string
	rightText?: string
	rightTextURL?: string
	list: []
}

export default function SectionList({
	heading,
	list,
	rightText,
	rightTextURL,
}: Props) {
	return (
		<div className="row mb-5">
			

			<SectionHeading
				heading={heading}
				rightText={rightText}
				rightTextURL={rightTextURL}
			/>
			<EachFile />
			<EachFile />
			<EachFile />
			<EachFile />
			<EachFile />
			<EachFile />
		</div>
	)
}
