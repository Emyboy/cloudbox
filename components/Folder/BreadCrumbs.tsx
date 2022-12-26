import React from 'react'

export type BreadCrumbs = {
	_id: string
	name: string
}

type Props = {
	breadcrumbs: BreadCrumbs[]
	goToRoot: () => void
	goToFolder: (folder_id:string) => void
}

export default function FolderBreadCrumbs({ breadcrumbs, goToRoot, goToFolder }: Props) {
	// if (breadcrumbs.length === 0) {
	// 	return null
	// }

    const shortenName = (name:string) => {
        return name.length > 13 ? name.slice(0, 13)+'...' : name
    }

	return (
		<nav aria-label="breadcrumb d-flex">
			<ol
				className="breadcrumb iq-bg-primary mb-0 d-flex rounded-0 align-items-center"
				style={{ overflowX: 'auto', flexWrap: 'inherit' }}
			>
				<li className="breadcrumb-item">
					<button className="btn text-primary p-0" onClick={goToRoot}>
						Root
					</button>
				</li>
				{breadcrumbs.length > 1 ? (
					<>
						{breadcrumbs.map((val, i) => {
							if (i < breadcrumbs.length - 1) {
								return (
									<li
										className="breadcrumb-item"
										key={`__-bread-${i}`}
										onClick={() => goToFolder(val._id)}
									>
										<button className="text-truncate btn text-primary p-0">
											{shortenName(val.name)}
										</button>
									</li>
								)
							}
						})}
					</>
				) : null}
				{breadcrumbs.length > 0 ? (
					<li className="breadcrumb-item active " aria-current="page">
						<button className="btn p-0 text-truncate">
							{breadcrumbs[breadcrumbs.length - 1].name}
						</button>
					</li>
				) : null}
			</ol>
		</nav>
	)
}
