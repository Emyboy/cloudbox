import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export class FileService {
	static async addFile() {
        console.log("CALLD ")
		try {
            console.log('ADDING')
			const docRef = await addDoc(collection(db, 'users'), {
				first: 'Ada',
				last: 'Lovelace',
				born: 1815,
			})
			console.log('Document written with ID: ', docRef.id)
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}
}
