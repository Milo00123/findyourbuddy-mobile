import { Text, View } from "react-native"
import PostBtn from "../../../components/PostBtn"
export default function Pool() {
  return (
    <View className="w-full flex-1 flex-row-reverse " >
      <View className="mr-3 mt-3">
      <PostBtn label= 'POST '/>

      </View>
    </View>


  )
}
