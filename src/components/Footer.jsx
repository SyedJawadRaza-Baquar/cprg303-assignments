import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer(){
    return(
        <View style ={styles.footer}>
            <Text style={styles.footerText}>All rights reserved</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer : {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '#333',
    },
})