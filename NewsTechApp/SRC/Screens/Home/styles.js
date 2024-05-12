import { StyleSheet } from "react-native";
import Color from "../Color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Color.primary,
    },
})