import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Color from '../Color'
import { useNavigation } from '@react-navigation/native'

const List = ({ newsList }) => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('ReadNews', { news: item })}
            >
                <View style={styles.content}>
                    <Image style={styles.imageContent} source={{ uri: item.urlToImage }} />
                    <View style={styles.textContent}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={4}>
                            {item.title}
                        </Text>

                        <Text style={{ marginVertical: 5 }}>{new Date(item.publishedAt).toLocaleDateString()}</Text>

                        <Text style={{ color: Color.primary }}>{item.source.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={newsList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={<View style={styles.lineSeparator} />}
        />
    );
};

export default List