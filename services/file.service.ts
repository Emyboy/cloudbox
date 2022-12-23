import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { v4 as UUID } from 'uuid'

export class FileService {
	static async addFile(
		name: string,
		user: string | undefined,
		file_url: string,
		type: string,
		size: number
	) {
		console.log('CALLD ')
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
			console.log('ADDING')
			const docRef = await addDoc(collection(db, 'files'), newFile)
			console.log('Document written with ID: ', docRef.id)
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	
}
