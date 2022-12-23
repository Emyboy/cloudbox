import { collection, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as UUID } from 'uuid'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { UploadedFile } from '../types/file.types'

export class FileService {
	static async addFile(
		name: string,
		user: string | undefined,
		file_url: string,
		type: string,
		size: number
	) {
		try {
			const newFile = {
				name,
				user,
				file_url,
				size,
				type,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
				_id: UUID(),
			}

			console.log('SAVING TO DB --', newFile)

			const docRef = await addDoc(collection(db, 'files'), newFile)
			// console.log('Document written with ID: ', docRef.id)
			
			const theDoc = doc(db, 'files', docRef.id)
			const docSnap = await getDoc(theDoc)
			return { ...docSnap.data(), doc: docRef.id }
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	static async deleteFile(_doc: string, file:UploadedFile) {
		try {
			const storage = getStorage()
			const fileRef = ref(storage, `files/${file.user}/${file.name}`)
			await deleteDoc(doc(db, 'files', _doc))
			await deleteObject(fileRef)
			return Promise.resolve();
		} catch (error) {
			console.log(error);
			return Promise.reject(error)
		}
	}
}
