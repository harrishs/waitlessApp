import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import WaitlistOverviewScreen from "../screens/waitlist/WaitlistOverviewScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const WaitlistNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WaitlistOverviewScreen} />
        </Stack.Navigator>
    )
}

export default WaitlistNavigator;