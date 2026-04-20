// External Dependencies
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons"

// Constants
import { Colors, IconSize } from "@/constants/theme";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.background,
                    borderTopWidth: 0
                }
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome name="home" size={IconSize.medium} color={color} />
            }} />
            <Tabs.Screen name="tasks" options={{
                title: "Tasks",
                tabBarIcon: ({color}) => <FontAwesome name="tasks" size={IconSize.medium} color={color} />
            }} />
            <Tabs.Screen name="analytics" options={{
                title: "Analytics",
                tabBarIcon: ({color}) => <Ionicons name="analytics" size={IconSize.medium} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({color}) => <Ionicons name="person" size={IconSize.medium} color={color} />
            }} />
        </Tabs>
    );
}