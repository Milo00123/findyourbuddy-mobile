import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function AppTabs() {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor:'#ffd33d'
    }}
    >
      <Tabs.Screen name="Pool/[id]" options={{ 
        title: 'home',
        headerShown:false,
        tabBarIcon: () => <Ionicons name='home' size={20} />,
        }} />
      <Tabs.Screen name="Profile/[id]" options={{
         title: 'Profile',
 
          }} />
    </Tabs>
  );
}
