import TAlert from "@/components/ui/TAlert";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Text className="text-3xl bg-green-400 p-4 rounded-lg">HELLO</Text>
            <TAlert
                label={"Important Notice !!"}
                message={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elitLaborum nostrum "
                }
            />
        </View>
    );
}
