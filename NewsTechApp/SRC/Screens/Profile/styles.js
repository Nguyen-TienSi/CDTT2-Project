import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    bookmarks: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
})