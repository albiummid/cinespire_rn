import React from "react";
import { Text } from "react-native";

export default function TText({ children, style }: React.PropsWithChildren) {
    return <Text style={style}>{children}</Text>;
}
