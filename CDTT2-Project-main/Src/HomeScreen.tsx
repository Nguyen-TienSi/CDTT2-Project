import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Login/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    
        paddingHorizontal: 0, // Slightly more padding on the sides
        paddingTop: 20, // More padding on the top for better spacing
        backgroundColor: '#f5f5f5', // Optional: Adds a light background color
    },
});


export default HomeScreen;
