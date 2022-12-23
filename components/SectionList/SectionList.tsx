import React from 'react'
import EachFile from '../../atoms/EachFile'
import SectionHeading from '../../atoms/SectionHeading'
import { UploadedFile } from '../../types/file.types'

type Props = {
	heading: string
	rightText?: string
	rightTextURL?: string
	list: UploadedFile[]
}

export default function SectionList({
	heading,
	list,
	rightText,
	rightTextURL,
}: Props) {
	return (
		<div className="mb-5">
			<SectionHeading
				heading={heading}
				rightText={rightText}
				rightTextURL={rightTextURL}
			/>
			<div className="row">
				{list.map((val, i) => {
					return <EachFile key={`${heading}-${val.name}-${i}`} data={val} />
				})}
			</div>
		</div>
	)
}
