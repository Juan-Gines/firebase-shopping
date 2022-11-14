import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import '../../firebase';
import { SiFirebase } from 'react-icons/si';
import { AppContext } from '../../App';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

const Header = () => {
	const { setRoute, user, setUser } = useContext(AppContext);

	const logout = () => {
		signOut(auth)
			.then(() => {
				setRoute('login');
				toast.success(`Usuario ${user.email} ha deslogueado correctamente`);
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between p-8 fixed top-0'>
			<div
				className='flex items-center gap-2 cursor-pointer'
				onClick={() => setRoute('home')}
			>
				<SiFirebase className='text-2x1 text-pink-600' />
				<span className='text-x1 font-semibold text-pink-600'>FireShopping</span>
			</div>
			<div className='flex gap-2'>
				{user ? (
					<>
						<p>Bienvenido {user.email}</p>
						<button
							className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
							onClick={logout}
						>
							Logout
						</button>
					</>
				) : (
					<>
						<button
							className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
							onClick={() => setRoute('login')}
						>
							Login
						</button>
						<button onClick={() => setRoute('register')}>... o Register</button>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
