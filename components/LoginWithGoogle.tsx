import { Pressable,Image, Text } from "react-native"
const googleIcon = require('../assets/Icons/Google_Icon.webp')
 
export default function LoginWithGoogle() {

  return (
    <Pressable

     className="w-full h-20 flex-row items-center justify-center border-b border-gray-400 ">
    <Image source={googleIcon} className="h-8 w-8 " />
    <Text className="ml-2" > Continue with Google</Text>
    </Pressable>
  )
}
 