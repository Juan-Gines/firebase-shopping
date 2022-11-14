import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import { app, messaging } from './firebase';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';
import Shopping from './routes/Shopping';
import Footer from './components/footer/Footer';
import TaskList from './components/TaskList';

export const AppContext = createContext(null);

onMessage(messaging, (payload) => {
	toast.custom((t) => (
		<div
			className={`${
				t.visible ? 'animate-enter' : 'animate-leave'
			}bg-sky-300 p-4 rounded-lg shadow-lg`}
		>
			<h1 className='text-lg text-sky-700 font-semibold'>{payload.notification.title}</h1>
			<p className='text-sm text-sky-600'>{payload.notification.title}</p>
		</div>
	));
});

function App() {
	const [route, setRoute] = useState('home');
	const [user, setUser] = useState(null);
	return (
		<AppContext.Provider value={{ route, setRoute, user, setUser }}>
			<Toaster />
			<Header />
			<main className='px-6 pt-24 pb-20'>
				{route === 'home' && <Home />}
				{route === 'login' && <Login />}
				{route === 'register' && <Register />}
				{route === 'shopping' && <Shopping />}				
				{route === 'tasklist' && <TaskList />}				
			</main>
			<Footer />
		</AppContext.Provider>
	);
}

export default App;
