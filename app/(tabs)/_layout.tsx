// Atoms Components
import Icon from "@/components/atoms/Icon";

// External Dependencies
import { Tabs } from "expo-router";

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
                tabBarIcon: ({color}) => <Icon icon="home" width={IconSize.medium} height={IconSize.medium} color={color} />
            }} />
            <Tabs.Screen name="tasks" options={{
                title: "Tasks",
                tabBarIcon: ({color}) => <Icon icon="tasks" width={IconSize.medium} height={IconSize.medium} color={color} />
            }} />
            <Tabs.Screen name="analytics" options={{
                title: "Analytics",
                tabBarIcon: ({color}) => <Icon icon="analytics" width={IconSize.medium} height={IconSize.medium} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({color}) => <Icon icon="profile" width={IconSize.medium} height={IconSize.medium} color={color} />
            }} />
        </Tabs>
    );
}