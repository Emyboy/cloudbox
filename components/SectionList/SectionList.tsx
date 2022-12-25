import React from 'react'
import EachFile from '../../atoms/EachFile'
import EachFolder from '../../atoms/EachFolder'
import SectionHeading from '../../atoms/SectionHeading'
import { UploadedFile } from '../../types/file.types'
import { UploadedFolder } from '../../types/folder.types'

type Props = {
	heading: string
	rightText?: string
	rightTextURL?: string
	list?: UploadedFile[]
	folders?: UploadedFolder[]
}

export default function SectionList({
	heading,
	list,
	rightText,
	rightTextURL,
	folders
}: Props) {
	return (
		<div className="mb-5">
			<SectionHeading
				heading={heading}
				rightText={rightText}
				rightTextURL={rightTextURL}
			/>
			<div className="row">
				{list && list.map((val, i) => {
					return <EachFile key={`${heading}-${val.name}-${i}`} data={val} />
				})}
				{folders && folders.map((val, i) => {
					return <EachFolder key={`${heading}-${val.name}-${i}`} data={val} />
				})}
			</div>
		</div>
	)
}
