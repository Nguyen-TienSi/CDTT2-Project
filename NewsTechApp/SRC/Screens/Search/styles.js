import { StyleSheet } from "react-native";
import Color from "../Color";

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
    },
    searchInput: {
        flex: 1,
        flexDirection: 'row',
        padding: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.lightGray,
        marginRight: 20,
    },
    seachText: {
        width: '90%',
        fontSize: 20,
    },
    icon: {
        paddingRight: 5,
    },
    lineSeparator: {
        height: 0.5,
        width: '100%',
        backgroundColor: Color.gray,
    },
})