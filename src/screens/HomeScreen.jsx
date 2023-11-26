import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native'
import MainLayout from "../layouts/MainLayout";
import { SafeAreaView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { create } from 'react-test-renderer';

export default function HomeScreen({navigation}) {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };
    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} tasks={tasks}/>
                <View style={styles.button}>
                    <Button
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                    />
                </View>
            </SafeAreaView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 50,
    }
})