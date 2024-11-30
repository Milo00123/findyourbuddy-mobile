import { Pressable,Image, Text } from "react-native"
const appleIcon = require('../assets/Icons/apple-logo.png')
 
export default function LoginWithApple() {

  return (
    <Pressable

     className="w-full h-20 flex-row items-center justify-center  ">
    <Image source={appleIcon} className="h-6 w-6 " />
    <Text className="ml-3" > Continue with Apple</Text>
    </Pressable>
  )
}
 