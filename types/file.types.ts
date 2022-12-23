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
	file: FileList | null
	name: string
	type: string
	size: number
	user: string
}
