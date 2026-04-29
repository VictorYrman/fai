// Atoms Components
import Icon from "@/components/atoms/Icon";

// Organisms Components
import TabBar from "@/components/organisms/TabBar";

// External Dependencies
import { Tabs } from "expo-router";

// Constants
import { IconSize } from "@/constants/theme";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
            tabBar={(props) => <TabBar props={props} />}
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