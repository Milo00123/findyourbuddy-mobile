import { View, Text,Image } from "react-native";
import ButtonStart from '../components/ButtonStart';

import { Link } from "expo-router";



export default function HomePage() {
 

  return (<>
    <View className='bg-white  flex-1 items-center justify-center' >

      </View>
      <View className=' w-fit h-fit bg-white  flex-1 items-center justify-center'>

        <Link href={'/Login'}>
        <ButtonStart  label='Start'/>
        </Link>

      </View>
  </> )
}
