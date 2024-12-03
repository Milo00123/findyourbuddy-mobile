import { Pressable,Image, Text } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import axios from "axios";
import { useEffect, useState } from "react";


const googleIcon = require('../assets/Icons/Google_Icon.webp')
 
WebBrowser.maybeCompleteAuthSession();

export default function LoginWithGoogle() {
    const [config, setConfig] = useState({
        androiClientId: '',
        iosClientId: '',
        webClientId: ''
      });
      useEffect(() => {
        const fetchConfig = async () => {
          try {
            const response = await axios.get('http://localhost:8080/config');
            setConfig({
              androiClientId: response.data.androidClientId,
              iosClientId: response.data.iosClientId,
              webClientId: response.data.webClientId,
            });
          } catch (error) {
            console.error('Failed to fetch config', error);
          }
        };
        fetchConfig();
      }, [])
    const [request, response, promptAsync] = Google.useAuthRequest(config);
     

    const getUserProfile = async (token:any)=>{
        if (!token) return;
        try{
            const {data: user }= await axios.get('https://openidconnect.googleapis.com/v1/userinfo',{
                headers:{Authorization: `Bearer ${token}`}
            });
       
            console.log(user);
        } catch (error){
            console.error('error getting user', error)
        }
        }
    const handleToken = () => {
        if(response?.type === 'success'){
            const {authentication} = response;
            const token = authentication?.accessToken;
            console.log('access token', token)
            getUserProfile(token)
        }
    }

    useEffect(() =>{
        handleToken()
    },[response])

  
  return (
    <Pressable
    onPress={()=>promptAsync()}
     className="w-full h-20 flex-row items-center justify-center ">
    <Image source={googleIcon} className="h-8 w-8 " />
    <Text className="ml-2" > Continue with Google</Text>
    </Pressable>
  )
}
 