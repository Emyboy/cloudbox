import React from 'react'
import '../public/assets/css/backend-plugin.min.css'
import '../public/assets/css/backende209.css'
import '../public/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
import '../public/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css'
import '../public/assets/vendor/remixicon/fonts/remixicon.css'

import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Login from '../components/Login'
import MasterControl from '../components/MasterControl'
import MasterPopup from '../components/Popups/MasterPopup'
import UploadQueue from '../components/Upload/UploadQueue'

export default function MyApp({ Component, pageProps }: any) {
	return (
		<Provider store={store}>
			<>
				<MasterPopup />
				<MasterControl />
				<UploadQueue />
			</>

			<div className="wrapper">
				<Login />
				<Component {...pageProps} />
			</div>
		</Provider>
	)
}
