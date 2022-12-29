import React from 'react'
import FolderPreview from '../../components/Folder/FolderPreview/FolderPreview'
import MainLayout from '../../components/Layout/MainLayout'
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	where,
} from 'firebase/firestore'
import { db } from '../../firebase'
import { UploadedFile } from '../../types/file.types'
import { UploadedFolder } from '../../types/folder.types'
import Head from 'next/head'

type Props = {
	allFiles: UploadedFile[]
	allFolders: UploadedFolder[]
	theFolder: UploadedFolder
}

export default function FolderDetails({
	allFiles,
	allFolders,
	theFolder,
}: Props) {
	return (
		<MainLayout>
			<>
				<Head>
					<title>{theFolder.name} Folder - CloudBox</title>
				</Head>
				<FolderPreview files={allFiles} folders={allFolders} />
			</>
		</MainLayout>
	)
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts

	const filesRef = await collection(db, 'folders')
	const allFolders: any = []
	const q = await query(
		filesRef,
		orderBy('createdAt', 'desc')
		// where('parentFolder', '==', folder_details)
		// limit(8)
	)
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => {
		allFolders.push({ ...doc.data(), doc: doc.id })
	})

	const paths = allFolders.map((folder: UploadedFolder) => ({
		params: { folder_details: `${folder._id}` },
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: any }) {
	const { folder_details } = params
	console.log('PARENT FOLDER --', folder_details)
	const filesRef = await collection(db, 'files')
	const folderRef = await collection(db, 'folders')

	// getting folder files
	const allFiles: any = []
	const q = await query(
		filesRef,
		orderBy('createdAt', 'desc'),
		where('parentFolder', '==', folder_details)
	)
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => {
		allFiles.push({ ...doc.data(), doc: doc.id })
	})

	// getting folder folders
	const allFolders: any = []
	const q2 = await query(
		folderRef,
		orderBy('createdAt', 'desc'),
		where('parentFolder', '==', folder_details)
	)
	const querySnapshot2 = await getDocs(q2)
	querySnapshot2.forEach((doc) => {
		allFolders.push({ ...doc.data(), doc: doc.id })
	})

	// get folder details
	const theFolder: any = []
	const q3 = await query(
		folderRef,
		orderBy('createdAt', 'desc'),
		where('_id', '==', folder_details)
	)
	const querySnapshot3 = await getDocs(q3)
	querySnapshot3.forEach((doc) => {
		theFolder.push({ ...doc.data(), doc: doc.id })
	})

	console.log('FOLDER DETAILS --', theFolder)

	return {
		props: {
			allFiles,
			allFolders,
			theFolder: theFolder[0],
		},
		revalidate: 1, // In seconds
	}
}
