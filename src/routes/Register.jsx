import React, { useState, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { AppContext } from '../App';

const auth = getAuth();

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setRoute, setUser } = useContext(AppContext);

	const crearUsuario = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				toast.success(`Usuario ${user.email} registrado`);
        setUser(user);
				setRoute('home');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	const registraUsuario = (e) => {
		e.preventDefault();
		crearUsuario();
	};
	return (
		<>			
			<h1 className='text-center text-2xl font-semibold text-sky-700 mb-4'>Registro</h1>
			<form
				className='flex flex-col items-center gap-2'
				onSubmit={registraUsuario}
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
					Registrate
				</button>
			</form>
		</>
	);
};

export default Register;
