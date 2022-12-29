export interface UploadedFile {
	doc: string
	uuid: string
	name: string
	type: string
	size: number
	preview_url: string
	file_url: string
	user: string
	parentFolder: string
	isFavorite: boolean
}

export interface FileData {
	index: number
	file: string
	name: string
	type: string
	size: number
	user: string | undefined
	isDone: boolean
	parentFolder: string
}

export interface FileState {
	recent_files: UploadedFile[]
}
