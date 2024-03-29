import React from 'react';
import { StyleSheet, View } from 'react-native';
import Demo from './Demo';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* <HeaderBookmark/>
            <Bookmark/> */}
            <Demo/>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingRight:15,
        paddingLeft:15,
    },
});

export default HomeScreen;
