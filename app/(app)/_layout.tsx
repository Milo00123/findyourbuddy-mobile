import { Tabs } from 'expo-router';
export default function AppTabs() {
  return (
    <Tabs>
      <Tabs.Screen name="pool" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
