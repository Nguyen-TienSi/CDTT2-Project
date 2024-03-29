// Bookmark.js
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderBookmark from '../Components/headerBookmark'; // Import the HeaderBookmark component

const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]); // Danh sách bookmark

    // Hàm thêm bookmark
    const addBookmark = () => {
        const newBookmark = { id: Math.random().toString(), name: `Page ${bookmarks.length + 1}` };
        setBookmarks([...bookmarks, newBookmark]);
    };

    // Hàm xóa bookmark
    const deleteBookmark = (id) => {
        const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(updatedBookmarks);
    };

    return (
        <View style={styles.container}>
            <HeaderBookmark /> {/* Render the HeaderBookmark component */}
            <View style={styles.row}>
                <TouchableOpacity onPress={addBookmark}>
                    <View style={[styles.button, { marginRight: 160 }]}>
                        <Text style={styles.buttonText}>Mark page</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../../assets/favicon.png')} style={styles.image} />
            </View>
            {bookmarks.map(bookmark => (
                <View key={bookmark.id} style={styles.bookmarkContainer}>
                    <Text>{bookmark.name}</Text>
                    <TouchableOpacity onPress={() => deleteBookmark(bookmark.id)}>
                        <Text style={styles.deleteButton}>Delete</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        marginRight: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: 50,
        height: 50,
    },
    bookmarkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    deleteButton: {
        color: 'red',
    },
});

export default Bookmark;
