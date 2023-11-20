/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };
    return(
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} tasks={tasks}/>
        </SafeAreaView>
    );
}