import React from 'react';
import { StyleSheet, View } from 'react-native';
import LuuBai from './Luubai';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <LuuBai/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20, // Slightly more padding on the sides
        paddingTop: 20, // More padding on the top for better spacing
        backgroundColor: '#f5f5f5', // Optional: Adds a light background color
    },
});


export default HomeScreen;
