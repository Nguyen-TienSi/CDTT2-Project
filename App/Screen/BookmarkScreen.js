import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BookmarkScreen = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: '1', title: 'Page 1' },
    { id: '2', title: 'Page 2' },
    // Có thể thêm bookmarks khác ở đây
  ]);

  const navigateToPage = useCallback((pageId) => {
    console.log('Navigating to page:', pageId);
    // Thêm logic chuyển trang tại đây
  }, []);

  const deleteBookmark = useCallback((id) => {
    setBookmarks(currentBookmarks => currentBookmarks.filter(bookmark => bookmark.id !== id));
  }, []);

  const addBookmark = useCallback(() => {
    // Thêm bookmark mới với ID và title được tạo tự động
    const newId = (Math.max(...bookmarks.map(b => parseInt(b.id)), 0) + 1).toString();
    const newBookmark = { id: newId, title: `Page ${newId}` };
    setBookmarks(currentBookmarks => [...currentBookmarks, newBookmark]);
  }, [bookmarks]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigateToPage(item.id)}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity onPress={() => deleteBookmark(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addBookmark}>
        <Text style={styles.addButtonText}>Add Bookmark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    fontSize: 18,
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 10,
  },
  addButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default BookmarkScreen;