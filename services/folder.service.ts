import { collection, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as UUID } from 'uuid'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { UploadedFile } from '../types/file.types'

export class FolderService {
	static async createFolder(name: string, user: string | undefined, parentFolder?: string) {
		try {
			const newFolder = {
				name,
				user,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
				_id: UUID(),
				parentFolder: parentFolder || null
			}

			console.log('SAVING TO DB --', newFolder)

			const docRef = await addDoc(collection(db, 'folders'), newFolder)
			// console.log('Document written with ID: ', docRef.id)

			const theDoc = doc(db, 'folders', docRef.id)
			const docSnap = await getDoc(theDoc)
			return { ...docSnap.data(), doc: docRef.id }
		} catch (e) {
			console.error('Error adding document: ', e)
			return Promise.reject(e)
		}
	}

	static async deleteFolder(_doc: string, file: UploadedFile) {
		try {
			const storage = getStorage()
			const fileRef = ref(storage, `files/${file.user}/${file.name}`)
			await deleteDoc(doc(db, 'files', _doc))
			await deleteObject(fileRef)
			return Promise.resolve()
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}
}
