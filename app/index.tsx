import { View, Text,Image } from "react-native";
import { Link } from "expo-router";
import ButtonStart from '../components/ButtonStart';
const logo = require('../assets/Images/findyourbuddy.png')

export default function HomePage() {
;

  return (<>
  <View className="flex-1 w-screen h-full">

        <View className='bg-white  flex-1 items-center justify-center' >
        <Image source={logo} className='w-80 h-80 fill-black' />
        <Text>Find Your Buddy</Text>
          </View>
          <View className=' w-fit h-fit bg-white  flex-1 items-center justify-center'>

            <Link href={'/Login'}>
            <ButtonStart  label='Start'/>
            </Link>

          </View>

      </View>
  </> )
}
