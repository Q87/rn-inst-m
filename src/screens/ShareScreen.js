import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { THEME } from "../theme";

/**
 * Show screen with the ability to share a new post
 */
export const ShareScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Share</Text>
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
