import React from "react";
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";

import { CreateAccount } from '../screens/CreateAccount'
import { SignIn } from '../screens/SignIn'
import { Home } from "../screens/Home";
import { RiskAreas } from "../screens/RiskAreas";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes( ) {
    return(
            <Navigator /* define a navegação*/ 
                screenOptions={{ 
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'transparent',
                    }
                }}
                initialRouteName="SignIn"
            >
                <Screen //telas disponiveis para navegação
                    name="SignIn"
                    component={SignIn}
                />
                <Screen //telas disponiveis para navegação
                    name="CreateAccount"
                    component={CreateAccount}
                />
                <Screen //telas disponiveis para navegação
                    name="Home"
                    component={Home}
                />
                <Screen //telas disponiveis para navegação
                    name="RiskAreas"
                    component={RiskAreas}
                />

            </Navigator>
    )
}