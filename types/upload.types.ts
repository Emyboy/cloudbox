import { FileData } from "./file.types"

export interface UploadState {
    showUploadQueue: boolean
    showUploadPopup: boolean
    uploadQueue: FileData[]
}