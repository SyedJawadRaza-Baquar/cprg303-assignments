import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen({navigation}) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    return (
        <MainLayout>
                <Text style={styles.text}>My To Do List App</Text>
                <Text style={styles.text}>Developed By: Syed Jawad Raza Baquar</Text>
                <Text style={styles.text}>Current Date: {formattedDate}</Text>
            <View style={styles.button}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                    />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
      text: {
        fontSize: 16,
      },
      button: {
        margin: 50,
      },
});