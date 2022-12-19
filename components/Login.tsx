import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { authProvider } from '../firebase'

type Props = {}

export default function Login({}: Props) {
	const auth = getAuth()
	const { mode } = useSelector((state: RootState) => state.view)

	const handleLogin = async () => {
		signInWithPopup(auth, authProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result.user
				// ...

                console.log({ user, token})
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				// ...
			})
	}

	return (
		<section
			className="login-content bg-gray"
			style={{
				zIndex: 100,
				position: 'fixed',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			}}
		>
			<div className="container h-100">
				<div className="row justify-content-center align-items-center height-self-center">
					<div className="col-md-5 col-sm-12 col-12 align-self-center">
						<div className="sign-user_card card">
							{mode !== 'dark' ? (
								<img
									src="../assets/images/logo.png"
									className="img-fluid rounded-normal light-logo logo"
									alt="logo"
								/>
							) : (
								<img
									src="../assets/images/logo-white.png"
									className="img-fluid rounded-normal darkmode-logo logo d-none"
									alt="logo"
								/>
							)}
							<h3 className="mb-3">Get Access</h3>
							<form className="my-5 d-flex flex-column align-items-center">
								<button
									type="button"
									className="btn btn-primary "
									onClick={handleLogin}
								>
									Authenticate With Google
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
