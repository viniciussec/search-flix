import { Image, Text, View } from "react-native";
import { CastMember } from "../types/Credits";
import { IMAGE_URL } from "../utils/constants";

interface Props {
    castMember: CastMember
}
export default function CastCard({ castMember }: Props) {
    return (
        <View className="mx-2 flex flex-row space-x-4 h-20 bg-[#323B45] rounded-sm">
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
        </View>
    )
}