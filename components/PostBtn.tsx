import { Text,View } from "react-native";
import * as Animatable from 'react-native-animatable';
import "../global.css";

type Props={
  label: string,
};
export default function ({label}:Props) {

  return (
  <View className="w-20 h-10 border-2 border-gray-600 rounded-3xl justify-center">
    <Text className="text-center">{label}</Text>
  </View>
  
  )
}