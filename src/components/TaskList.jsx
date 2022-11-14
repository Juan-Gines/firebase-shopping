import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { AppContext } from '../App';
import { addNewTask, deleteTask, getTasks, updateTask } from '../firebase/taskController';

const TaskList = () => {
	const [task, setTask] = useState({ title: '', description: '' });
	const [tasks, setTasks] = useState([]);
	const [mode, setMode] = useState('add');
	const { user } = useContext(AppContext);

	const addTask = () => {
		addNewTask(task);
		setTask({ title: '', description: '' });
		initializeTasks();
	};

	const modifyTask = async () => {
		await updateTask(task);
		setTask({ title: '', description: '' });
		initializeTasks();
		setMode('add');
	};

	const editTask = (id) => {
		const task = tasks.find((t) => t.id === id);
		setTask(task);
		setMode('update');
	};

	const removeTask = async (id) => {
		await deleteTask(id);
		initializeTasks();
	};

	const initializeTasks = () => {
		getTasks()
			.then((t) => setTasks([...t]))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		initializeTasks();
	}, []);

	return (
		<div>
			<h1 className='text-center text-2xl font-semibold text-sky-700 mb-4'>Esta es la Task List</h1>
			<div className='flex flex-col mb-4 gap-4'>
				<h2>{mode === 'add' ? 'Introduce una nueva tarea' : 'Edita la tarea'}</h2>
				<input
					type='text'
					value={task.title}
					placeholder='Título'
					disabled={!user}
					className='border outline-none py-1 px-2 focus:ring focus:ring-sky-500 rounded'
					onChange={(e) => {
						setTask({ ...task, title: e.target.value });
					}}
				/>
				<textarea
					value={task.description}
					rows={3}
					placeholder='Descripción'
					disabled={!user}
					className='border outline-none py-1 px-2 focus:ring focus:ring-sky-500 rounded'
					onChange={(e) => {
						setTask({ ...task, description: e.target.value });
					}}
				></textarea>
				<button
					disabled={!user}
					className='bg-sky-500 hover:bg-sky-700 py-2 text-white font-semibold rounded transition disabled:bg-sky-200'
					onClick={() => (mode === 'add' ? addTask() : modifyTask())}
				>
					{mode === 'add' ? 'Añadir' : 'Editar'}
				</button>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4'>
				{tasks.map((task) => (
					<div className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2'>
						<h1 className='font-semibold'>{task.title}</h1>
						<div className='border-t border-sky-300'></div>
						<p>{task.description}</p>
						<div className='flex justify-evenly'>
							<button
								className='bg-sky-400 text-white hover:bg-sky-600 transition py-1 px-2 rounded'
								onClick={() => editTask(task.id)}
							>
								Editar
							</button>
							<button
								className='bg-red-700 hover:bg-red-900 text-white transition py-1 px-2 rounded'
								onClick={() =>
									window.confirm('Seguro que quieres eliminar la tarea') && removeTask(task.id)
								}
							>
								Eliminar
							</button>
						</div>
					</div>
				))}
			</div>
			{tasks.length === 0 && user && (
				<p className=' text-lg font-semibold mx-5'>No tienes tareas pendientes. </p>
			)}
			{!user && (
				<p className='text-red-500 text-lg font-semibold mx-5'>
					No puedes leer ni escribir tareas sin estar logueado
				</p>
			)}
		</div>
	);
};

export default TaskList;
