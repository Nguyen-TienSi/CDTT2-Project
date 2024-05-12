import { StyleSheet } from "react-native";
import Color from "../../Color";

export const styles = StyleSheet.create({
    unselectText: {
        fontSize: 20,
        fontWeight: '800',
        color: Color.gray,
        marginHorizontal: 15,
        padding: 10,
        backgroundColor: Color.white,
      },
      selectText: {
        fontSize: 20,
        fontWeight: '900',
        color: Color.white,
        marginHorizontal: 15,
        padding: 10,
        backgroundColor: Color.primary,
      },
})