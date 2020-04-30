import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../theme";

// Types of icons
const ICON_TYPES = {
    Feather: Feather,
    MaterialCommunityIcons: MaterialCommunityIcons,
    default: Feather,
};

/**
 * Show header icon
 */
export const AppHeaderIcon = (props) => {
    const { iconSize, iconType } = props;

    return (
        <HeaderButton
            {...props}
            iconSize={iconSize ?? 24}
            IconComponent={ICON_TYPES[iconType ?? "default"]}
            color={THEME.ICON_COLOR}
        />
    );
};
