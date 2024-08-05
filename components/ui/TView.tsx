import React from "react";
import { View } from "react-native";

export default function TView({ children, style }: React.PropsWithChildren) {
    return <View style={style}>{children}</View>;
}
