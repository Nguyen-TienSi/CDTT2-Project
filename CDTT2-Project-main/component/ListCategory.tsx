import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import GiCungDuoc from './SectionHeader';

const ListCategory = () => {
    return (
        <>
            <GiCungDuoc title="Danh mục" />

            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={require('../assets/moi.jpg')} style={{ width: '100%', height: 50 }} />
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/thegoi.jpg')} style={{ width: '100%', height: 50 }} />
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/nong.jpg')} style={{ width: '100%', height: 50 }} />
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/giatri1.jpg')} style={{ width: '100%', height: 50 }} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        width: '20%',
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#000'
    }
});

export default ListCategory;
