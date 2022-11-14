import React, { useContext, useState } from 'react';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,	
} from 'firebase/auth';
import { AppContext } from '../App';
import toast from 'react-hot-toast';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setRoute, setUser } = useContext(AppContext);

	const hazLoginGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// ...
				toast.success(`¡Bienvenido ${user.email} disfruta!`);
				setUser(user);
				setRoute('home');
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
				console.log('Error code:', errorCode);
				console.log('Error message: ', errorMessage);
				console.log('Error email: ', email);
				console.log('Error credential: ', credential);
			});
	};

	const hazLoginConEmail = (e) => {
    e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				toast.success(`¡Bienvenido ${user.email} disfruta!`);
				setUser(user);
				setRoute('home');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};  

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-2xl font-semibold text-sky-700 text-center mb-4'>Este es el login</h1>
			<form
				className='flex flex-col items-center gap-2'
				onSubmit={hazLoginConEmail}
			>
				<input
					className='border border-gray-400 rounded-md py-1 px-2 outline-none focus:bg-sky-100'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='border border-gray-400 rounded-md py-1 px-2 outline-none focus:bg-sky-100'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='m-2 bg-sky-600 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'>
					Login
				</button>
			</form>
			<button onClick={hazLoginGoogle}>... o Login Google</button>
		</div>
	);
};

export default Login;
