import React from 'react';
import { StyleSheet, View } from 'react-native'; // Import ScrollView
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
        paddingHorizontal: 15,
        paddingTop: 15,
        color: 'red'
        
    },
});

export default HomeScreen;
