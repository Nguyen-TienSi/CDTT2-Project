import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../assets/icon.jpg')} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.tabs}>
                <Text style={styles.tab}>Nóng</Text>
                <Text style={styles.tab}>Mới</Text>
                <Text style={styles.tab}>Bóng đá VN</Text>
                <Text style={styles.tab}>Bóng</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../assets/icon.jpg')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/icon.jpg')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00A4DE',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    tab: {
        color: '#FFFFFF',
        paddingHorizontal: 8,
        fontSize: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default TopBar;
