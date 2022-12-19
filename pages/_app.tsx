import React from 'react'
import '../public/assets/css/backend-plugin.min.css'
import '../public/assets/css/backende209.css'
import '../public/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
import '../public/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css'
import '../public/assets/vendor/remixicon/fonts/remixicon.css';

import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: any) {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<Component {...pageProps} />
			</div>
		</Provider>
	)
}
