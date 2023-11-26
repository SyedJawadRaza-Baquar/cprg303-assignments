import { StyleSheet, TextInput, View, Button, Alert } from 'react-native'
import React, {useState} from 'react'

export default function ToDoForm({addTask, tasks}) {
  const handleAddTask = () => {
    if (tasks.includes(taskText)) {
      Alert.alert('Duplicate Task', 'This task already exists.');
    } else {
      addTask(taskText);
      setTaskText('');
    }
  };
  const [taskText, setTaskText] = useState('');
  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="Add a new task..."
      onChangeText={(text) => setTaskText(text)}
      value={taskText}
    />
    <Button title="Add Task"
            onPress={handleAddTask}
     />
  </View>
  )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
});