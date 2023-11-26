import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header(){
    return(
        <View style ={styles.header}>
            <Text style={styles.headerText}>My To Do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header : {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        color: '#333',
    },
})