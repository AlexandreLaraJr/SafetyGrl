import React from "react";
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";

import { CreateAccount } from '../screens/CreateAccount'
import { SignIn } from '../screens/SignIn'
import { Home } from "../screens/Home";
import { RiskAreas } from "../screens/RiskAreas";
import { User } from "../screens/User";
import { Complaint } from "../screens/Complaint";
import { Statements } from "../screens/Statements";
import { Statements2 } from "../screens/Statements2";
import { ChangePassword } from "../screens/ChangePassword";
import { Settings } from "../screens/Settings";
import { Notifications } from "../screens/Notifications";
import { Sos } from "../screens/Sos";

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
                <Screen //telas disponiveis para navegação
                    name="User"
                    component={User}
                />
                <Screen //telas disponiveis para navegação
                    name="Complaint"
                    component={Complaint}
                />
                <Screen //telas disponiveis para navegação
                    name="Statements"
                    component={Statements}
                />
                <Screen //telas disponiveis para navegação
                    name="Statements2"
                    component={Statements2}
                />
                <Screen //telas disponiveis para navegação
                    name="ChangePassword"
                    component={ChangePassword}
                />
                <Screen //telas disponiveis para navegação
                    name="Settings"
                    component={Settings}
                />
                <Screen //telas disponiveis para navegação
                    name="Notifications"
                    component={Notifications}
                />
                <Screen //telas disponiveis para navegação
                    name="Sos"
                    component={Sos}
                />

            </Navigator>
    )
}