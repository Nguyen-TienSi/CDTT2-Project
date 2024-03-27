import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BookmarkItem = ({ item, onDelete }) => (
  <TouchableOpacity style={styles.item} onPress={() => onDelete(item.id)}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.deleteText}>X</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    fontSize: 18,
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
  },
});

export default BookmarkItem;
