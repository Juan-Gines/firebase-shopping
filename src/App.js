import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import { app } from './components/firebase';
import Home from './components/routes/Home';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  return (
		<AppContext.Provider value={{ route, setRoute, user, setUser }}>
			<Header />
      <Toaster />
			<main className='p-6'>
				{route === "home" && <Home />}
				{route === "login" && <Login />}
				{route === "register" && <Register />}
			</main>
		</AppContext.Provider>
	);
}

export default App;
