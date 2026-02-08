import "../global.css"
import { Linking, Pressable, Text, TouchableOpacity, View } from "react-native";

export const ScreenContent = () => {
  const OpenRepo = () => {
    Linking.openURL("https://github.com/Fatuousnerd/React-Native-Starter.git")
  }
  const OpenGit = () => {
    Linking.openURL("https://github.com/Fatuousnerd/")
  }
  return (
    <View className="flex-1 flex-col gap-[50px] p-[25px] items-center justify-center bg-[#0B1215]">
      <Text className="text-[4rem] font-bold text-[#f0ffff] text-left leading-[4.5rem]">
        React {'\n'}Native & {'\n'}NativeWind Starter
      </Text>
      <View className="w-full flex-row items-center gap-3">
        <TouchableOpacity onPress={OpenRepo} className="flex-1">
          <Text className="text-[#029bce] text-[1.5rem] text-center font-bold p-[10px] bg-[#f0ffff] rounded-lg">GitHub Repo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenGit} className="flex-1">
          <Text className="text-[#ffffff] text-[1.5rem] text-center font-bold p-[10px] bg-[#029bce] rounded-lg">GitHub Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}