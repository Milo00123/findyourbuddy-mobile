import { Stack } from 'expo-router';
import "../global.css";
export default function RootLayout() {
  return (
    <Stack 
    screenOptions={{
        headerShadowVisible: false,
        
      }}>
      <Stack.Screen name="index" options={{headerShown: false }}/>
      <Stack.Screen name="Login"
 
       options={{headerTitle: '',
        headerBackTitle: 'Back',
         headerTintColor: '#000',
       }}/>
    </Stack>
  );
}
