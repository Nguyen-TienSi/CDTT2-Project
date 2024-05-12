import { StyleSheet } from "react-native";
import Color from "../Color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    imageContent: {
        width: 150,
        height: 150,
        marginVertical: 5,
    },
    textContent: {
        marginLeft: 10,
        marginRight: 200,
    },
    lineSeparator: {
        height: 0.5,
        width: '100%',
        backgroundColor: Color.gray,
    },
})