import React, {useEffect, useState} from 'react';
import { db } from '../firebase';

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot
} from 'firebase/firestore';


const Taskmanager = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const taskRef = collection(db, 'tasks');


    const handleAdd = async (e) => {
        e.preventDefault();
        if (task.trim()) {
            await addDoc(taskRef, {text: task});
            setTask('');
        }
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'tasks', id));
    };


    useEffect(() => {
        const unsubscribe = onSnapshot(taskRef, (snapshot) => {
            const newTasks = snapshot.doc.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTasks(newTasks);
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.map((t) => {
                    <li key={t.id}>
                        {t.text} <button onClick={() => handleDelete(t.id)}>❌</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Taskmanager;

