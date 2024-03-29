import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderBookmark = () => {
    return (
        <View style={styles.Tieu_De}>
             <View>
                <Text>X</Text>
            </View>
            <View style={styles.bookmarkContainer}>
                <Text style={styles.bookmarkText}>Bookmark(Deceloper VM)</Text>
            </View>
            <View>
                <Text>                   X</Text>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    Tieu_De: {
        marginTop: 15,
        flexDirection: 'row',
       
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15
    },
    bookmarkContainer: {
       
        
        paddingHorizontal: 10, // Khoảng cách giữa chữ và viền
        paddingVertical: 5 // Khoảng cách từ viền đến nội dung
    },
    bookmarkText: {
        fontSize:20
    }
});

export default HeaderBookmark;

