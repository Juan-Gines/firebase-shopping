/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
	apiKey: 'AIzaSyAoqro8ysPu6nMoSsS-Fxv1lpkGawZuyAI',
	authDomain: 'fir-shopping-b8f35.firebaseapp.com',
	projectId: 'fir-shopping-b8f35',
	storageBucket: 'fir-shopping-b8f35.appspot.com',
	messagingSenderId: '1004725355256',
	appId: '1:1004725355256:web:26645ea42c1052d67e310d',
});

const messaging = firebase.messaging();

/* messaging.onBackgroundMessage(function (payload) {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	const notificationTitle = 'Título de la notificación';
	const notificationOptions = {
		body: 'Este es el body.',
		icon: 'https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png',
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
}); */