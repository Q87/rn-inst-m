import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { THEME } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

/**
 * Show profile image
 */
export const ProfileImage = ({
    url,
    start = THEME.PROFILE_IMAGE_GRADIENT_START,
    end = THEME.PROFILE_IMAGE_GRADIENT_END,
    own = false,
    gradientSize = 62,
    imageSize = 57,
    imageBorder = true,
}) => {
    return (
        <View>
            <View style={styles.gradientWrapper}>
                <LinearGradient
                    colors={[start, end]}
                    style={[
                        styles.gradient,
                        { width: gradientSize, height: gradientSize },
                    ]}
                >
                    <View
                        style={[
                            styles.imageWrapper,
                            { width: imageSize, height: imageSize },
                            imageBorder && styles.imageWrapper_border,
                        ]}
                    >
                        <Image style={styles.image} source={{ uri: url }} />
                    </View>
                </LinearGradient>
            </View>

            {own && (
                <View style={styles.addWrapper}>
                    <Feather
                        name="plus"
                        size={17}
                        color={THEME.MAIN_CONTENT_COLOR}
                        style={styles.add}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    gradientWrapper: {
        borderRadius: 100,
        overflow: "hidden",
    },
    gradient: {
        transform: [{ rotate: "225deg" }],
        justifyContent: "center",
        alignItems: "center",
    },
    imageWrapper: {
        borderRadius: 100,
        backgroundColor: THEME.ICON_COLOR,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ rotate: "-225deg" }],
    },
    imageWrapper_border: {
        borderWidth: 1,
        borderColor: THEME.MAIN_CONTENT_COLOR,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
    },
    addWrapper: {
        width: 20,
        height: 20,
        borderRadius: 100,
        position: "absolute",
        left: "63%",
        top: "63%",
        borderWidth: 1,
        borderColor: THEME.MAIN_CONTENT_COLOR,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    add: {
        backgroundColor: THEME.ACTIVE_BACKGROUND,
        borderRadius: 100,
    },
});
