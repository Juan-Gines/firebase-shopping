import React, { useContext } from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import { AppContext } from '../../App';

const Footer = () => {
  const { setRoute } = useContext(AppContext)
  return (
		<footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
			<div
				className='text-4xl p-2 bg-sky-200 rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'
				onClick={() => setRoute('home')}
			>
				<IoHomeSharp />
			</div>
			<div
				className='text-4xl p-2 bg-sky-200 rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'
				onClick={() => setRoute('shopping')}
			>
				<FaShoppingCart />
			</div>
			<div
				className='text-4xl p-2 bg-sky-200 rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'
				onClick={() => setRoute('tasklist')}
			>
				<BsList />
			</div>
		</footer>
	);
}

export default Footer;
