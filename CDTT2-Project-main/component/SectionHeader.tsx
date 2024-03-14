import React from "react";
import { StyleSheet, Text, View } from "react-native";

type SectionHeaderProps = {
    title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SectionHeader;
