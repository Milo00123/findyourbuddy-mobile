import { Pressable,Image, Text,} from "react-native"
import * as AppleAuthentication from 'expo-apple-authentication';
const appleIcon = require('../assets/Icons/apple-logo.png')
 
export default function LoginWithApple() {

    const signInWithApple = async () => {
        try {
          const credentials = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          console.log({
            id: credentials.identityToken,
            authorization_code: credentials.authorizationCode,
          });
        } catch (e) {
          if ((e as any).code === 'ERR_REQUEST_CANCELED') {
            console.log('Something went wrong');
          } else {
            console.error('Error during sign in with Apple:', e);
          }
        }
      };

  return (
    <Pressable
     onPress={signInWithApple}
     className="w-full h-20 flex-row items-center justify-center  ">
    <Image source={appleIcon} className="h-6 w-6 " />
    <Text className="ml-3" > Continue with Apple</Text>
    </Pressable>


  )
}
