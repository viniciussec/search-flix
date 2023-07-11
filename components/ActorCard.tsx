import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_URL } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { FontAwesome5 } from "@expo/vector-icons";
import { CastMember } from "../types/CastMember";

type Props = {
  item: CastMember;
};

export default function ActorCard({ item }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      className="mt-4 flex flex-row space-x-4 h-40 border-2 border-[#323B45] rounded-md p-4"
      onPress={() => navigation.navigate("PersonDetails", { person: item })}
    >
      {item.profile_path ? (
        <Image
          source={{ uri: IMAGE_URL + item.profile_path }}
          className="w-32 h-32"
        />
      ) : (
        <View className="items-center justify-center w-32 h-full bg-gray-500">
          <FontAwesome5 name="image" size={50} color="black" />
        </View>
      )}
      <View className="justify-between">
        <View className="w-48">
          <Text className="text-2xl text-white">{item.name}</Text>
          <Text className="text-gray-400 text-md">{item.known_for_department}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
