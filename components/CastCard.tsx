import { Image, Text, TouchableOpacity, View } from "react-native";
import { CastMember } from "../types/CastMember";
import { IMAGE_URL } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface Props {
    castMember: CastMember
}
export default function CastCard({ castMember }: Props) {
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "PersonDetails">>();

    return (
        <TouchableOpacity 
            className="mx-2 flex flex-row space-x-4 h-20 bg-[#323B45] rounded-sm"
            onPress={() => navigation.navigate("PersonDetails", { person: castMember })}
        >
            <Image
                source={{ uri: IMAGE_URL + castMember.profile_path }}
                className="w-12 h-full"
            />
            <View className="pr-2 justify-center space-y-1">
                <Text className="text-white font-bold">
                    {castMember.name}
                </Text>
                <Text className="text-white">
                    {castMember.known_for_department === 'Acting' ? 
                    castMember.character : 
                    castMember.known_for_department}
                </Text>
            </View>
        </TouchableOpacity>
    )
}