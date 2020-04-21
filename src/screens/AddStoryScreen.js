import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { THEME } from "../theme";

/**
 * Show add story screen
 */
export const AddStoryScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Add Story</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: THEME.MAIN_CONTENT_COLOR,
        justifyContent: "center",
        alignItems: "center",
    },
});
