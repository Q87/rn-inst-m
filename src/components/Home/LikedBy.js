import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { THEME } from "../../theme";
import { ProfileImage } from "../ProfileImage";

/**
 * Show information about the likes of a story
 */
export const LikedBy = ({ likedBy }) => {
    return (
        <View style={styles.likes}>
            <View style={styles.likes__users}>
                {likedBy.last.map(({ id, avatar }, key) => (
                    <View
                        style={[
                            styles.likes__user,
                            0 === key && styles.likes__user_first,
                        ]}
                        key={id}
                    >
                        <ProfileImage
                            gradientSize={13}
                            imageSize={13}
                            imageBorder={false}
                            url={avatar}
                        />
                    </View>
                ))}
            </View>

            <Text style={styles.likes__text}>
                Liked by{" "}
                <Text style={styles.user}>
                    {likedBy.last[likedBy.last.length - 1].name}
                </Text>{" "}
                and {likedBy.qty} others
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    likes: {
        flexDirection: "row",
        alignItems: "center",
    },
    likes__users: {
        flexDirection: "row",
    },
    likes__user: {
        width: 13,
        height: 13,
        borderRadius: 100,
        backgroundColor: THEME.ICON_COLOR,
        borderColor: THEME.MAIN_CONTENT_COLOR,
        borderWidth: 1,
        marginLeft: -5,
    },
    likes__user_first: {
        marginLeft: 0,
    },
    likes__text: {
        marginLeft: 7,
    },
});
