import { Text,View } from "react-native";
import * as Animatable from 'react-native-animatable';
import "../global.css";

type Props={
  label: string,
};
export default function ButtonStart({label}:Props) {

  return (
  
   <View className="w-44 h-44 border-4 border-black  rounded-full justify-center items-center" >

    <Animatable.View
    animation="pulse"
    easing="ease-in-out"
    iterationCount="infinite"
    className="w-44 h-44 border-4 border-black rounded-full flex items-center justify-center"
    >
 
    <View className=" w-40 h-40 rounded-full bg-black justify-center items-center ">
        
        <Text className=" text-gray-50 text-2xl text-center">{label}</Text>
  
    </View>

    </Animatable.View>

   </View>
  
  )
}
