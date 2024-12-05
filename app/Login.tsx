import { Text,View, Image, Pressable} from "react-native";
import LoginWithGoogle from "../components/LoginWithGoogle";
import LoginWithApple from "../components/LoginWithApple";

export default function Login() {
  return (
    <View className="bg-white w-full h-full" >
        <View className="w-fit p-5">
            <Text className="text-4xl font-bold mb-3" >Hi there!</Text>
            <Text className="w-80">We're happy you're here! Please choose an option below to sign in.</Text>
        </View>
      <View className="w-full h-96 justify-center items-center">
         <View className="bg-orange-300 w-80 h-80 mb-3 rounded-xl"></View>
         </View>
         <View className="w-full h-20 flex-initial justify-center ">
          <LoginWithGoogle/>
         </View>
         <View className="w-full h-20 flex-initial justify-center ">
          <LoginWithApple/>
         </View>
 
    </View>

  )
}
