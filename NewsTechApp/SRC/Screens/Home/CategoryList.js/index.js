import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

export const CategoryTextSlider = ({ selectCategory }) => {
    const [active, setActive] = useState(1);
    
    const categoryList = [
        {
            id: 1,
            name: 'Latest',
        },
        {
            id: 2,
            name: 'Smartphone',
        },
        {
            id: 3,
            name: 'Social Media',
        },
        {
            id: 4,
            name: 'Artificial Intelligence',
        },
        {
            id: 5,
            name: 'Gaming',
        },
        {
            id: 6,
            name: 'Computer',
        },
    ];

    const onCategoryClick = (id) => {
        setActive(id);
    };

    return (
        <View style={{ marginBottom: 10 }}>
            <FlatList
                data={categoryList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        onCategoryClick(item.id);
                        if (item.name === 'Latest') {
                            item.name = 'Technology';
                        }
                        selectCategory(item.name);
                    }}>
                        <Text style={item.id === active ? styles.selectText : styles.unselectText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};