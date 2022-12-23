export interface UploadedFile {
	uuid: string
	name: string
	type: string
	size: number
	preview_url: string
	file_url: string
	user: string
}

export interface FileData {
	index: number
	file: string
	name: string
	type: string
	size: number
	user: string | undefined
	isDone: boolean
}

export interface FileState {
	recent_files: UploadedFile[]
}
