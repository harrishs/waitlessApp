import { createStackNavigator } from "@react-navigation/stack";
import {  createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import WaitlistOverviewScreen from "../screens/waitlist/WaitlistOverviewScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const WaitlistNavigator = () => {
    return (
        <Stack />
    )
}

const WaitlistNavigator = createStackNavigator({
    WaitlistsOverview: WaitlistOverviewScreen
}, {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "" 
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
});

export default createAppContainer(WaitlistNavigator);