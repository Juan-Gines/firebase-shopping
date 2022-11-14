// En este fichero crearemos toda la lógica de base de datos para las tasks
import { db } from '.';
import { doc, setDoc, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';

// CRUD

export const addNewTask = async (task) => {
	await addDoc(collection(db, 'tasks'), task);
};

export const getTasks = async () => {
	const querySnapshot = await getDocs(collection(db, 'tasks'));
	/* querySnapshot.forEach((doc) => {
		console.log(doc.id, ' => ', doc.data());
	}); */

	const tasks = querySnapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return tasks;
};

export const updateTask = async (task) => {
	await setDoc(doc(db, 'tasks', task.id), {
		title: task.title,
		description: task.description,
	});
};

export const deleteTask = async (id) => {
	await deleteDoc(doc(db, 'tasks', id));
};
