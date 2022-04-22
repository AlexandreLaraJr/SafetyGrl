import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Complaint } from "../screens/Complaint";
import { Home } from "../screens/Home";
import { Settings } from "../screens/Settings";
import { Sos } from "../screens/Sos";
import { Statements } from "../screens/Statements";
import Icon, { Icons } from '../components/Icons';
import { theme } from "../global/styles/theme";
import * as Animatable from 'react-native-animatable';

const TabArr = [
    { route: 'Home', label: 'Inicio', type: Icons.Ionicons, icon: 'ios-home', component: Home },
    { route: 'Statements', label: 'Depoimentos', type: Icons.Ionicons, icon: 'ios-chatbox-ellipses', component: Statements },
    { route: 'Complaint', label: 'Denuncia', type: Icons.Ionicons, icon: 'add-circle', component: Complaint },
    { route: 'Sos', label: 'SOS', type: Icons.Ionicons, icon: 'alert-circle', component: Sos },
    { route: 'Settings', label: 'Config', type: Icons.Ionicons, icon: 'ios-settings', component: Settings },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={500}
                style={styles.container}>
                <View style={styles.btn}>
                    <Animatable.View
                        ref={circleRef}
                        style={styles.circle} />
                    <Icon type={item.type} name={item.icon} color={focused ? '#fff' : theme.colors.primary} />
                </View>
                <Animatable.Text
                    ref={textRef}
                    style={styles.text}>
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}

export default function AnimatedTabBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 25,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: theme.colors.primary,
    }
})