import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { FolderService } from '../../services/folder.service'

type Props = {
	parentFolder?: string
	done: (e:any) => void
}

export default function CreateFolderForm({done}: Props) {
	const [name, setName] = useState('')
	const { user } = useSelector((state: RootState) => state.auth)
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		try {
			setLoading(true)
			const result = await FolderService.createFolder(name, user?.email)
			console.log('FOLDER CREATED --', result)
			setLoading(false)
			done(result)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<form className="pb-3" onSubmit={handleSubmit}>
			<h3>Crate Folder</h3>
			<div className="my-3">
				<label className="text-muted">{name.length}/40</label>
				<input
					className="form-control"
					placeholder="Folder Name"
					autoFocus
					onChange={(e) =>
						setName(
							e.target.value.replace(/[&\/\\#,@+()!_^$~%.'":*?<>{}]/g, '')
						)
					}
					maxLength={40}
					value={name}
				/>
			</div>
			<button className="btn btn-primary" disabled={!name || loading}>
				Create Folder
			</button>
		</form>
	)
}
