// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { getFirestore } from 'firebase/firestore';

const vapidKey =
	'BNCy-WGRDkziP3aXDBhhYIRL365foTkdcPMW_lu-IoIHIEPVbJghmApF3nWIsQpM7HiBmcfK4oaeLLXzdGAbq98';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAoqro8ysPu6nMoSsS-Fxv1lpkGawZuyAI',
	authDomain: 'fir-shopping-b8f35.firebaseapp.com',
	projectId: 'fir-shopping-b8f35',
	storageBucket: 'fir-shopping-b8f35.appspot.com',
	messagingSenderId: '1004725355256',
	appId: '1:1004725355256:web:26645ea42c1052d67e310d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, { vapidKey })
	.then((currentToken) => {
		if (currentToken) {
			// Send the token to your server and update the UI if necessary
			// ...
			// console.log(currentToken);
			sendTokenToServer(currentToken);
		} else {
			// Show permission request UI
			console.log('No registration token available. Request permission to generate one.');
			// ...
		}
	})
	.catch((err) => {
		console.log('An error occurred while retrieving token. ', err);
		// ...
	});

const sendTokenToServer = (token) => {
	if(localStorage.getItem('tokenSendToServer')) return;
	// TODO: Implementar la lógica de que en el servidor se almacene el token
	localStorage.setItem('tokenSendToServer', "1");
};

export const db = getFirestore();