import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Home = () => {
  // Danh sách các mục
  const data = [
    { id: 'HomePage', title: 'content...' },
    { id: 'Creat Newpage', title: 'content...' },
    { id: 'Read', title: 'content' },

  ];

  // Mục mục
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang Chủ</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Home;
