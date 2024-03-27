import React from 'react';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';

const LuuBai = () => {
    const dataFake = [
        {title: 'A', data: [{id: 1, name: 'Anh Đọc Vị'}, {id: 2, name: 'Anh Buồn'}]},
        {title: 'B', data: [{id: 3, name: 'Báo Báo'}, {id: 4, name: 'Báo Buồn'}]},
        {title: 'C', data: [{id: 5, name: 'Cài lo'}, {id: 6, name: 'Cám Ơn'}]},
        {title: 'E', data: [{id: 5, name: 'Cài lo'}, {id: 6, name: 'Cám Ơn'}]},

    ];

    return (
        <>
            <Text style={{ padding: 15, backgroundColor: 'gray', color: 'white', textAlign: 'center', fontSize: 18 }}>Danh Sách Lưu bài</Text>
            <Text style={{ padding: 15, backgroundColor: 'gray', color: 'white', textAlign: 'center', fontSize: 26 }}>Add New</Text>

            <SectionList
                sections={dataFake}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Image source={require('../assets/nhantam.jpg')} style={styles.avt} />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}>{item.name}</Text>
                    </View>
                )}
                renderSectionHeader={({section}) => (
                    <Text style={{ backgroundColor: 'red', color: 'white', }}>{section.title}</Text>
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    avt: {
        width: 60, // Slightly larger for better visibility
        height: 60,
        borderRadius: 30, // Fully round images
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        paddingVertical: 10, // Add some vertical padding
        borderBottomWidth: 1, // Add a subtle separator
        borderBottomColor: '#eee', // Soft color for the separator
    }
});


export default LuuBai;
