import React from "react"
import { View, Image, Linking} from 'react-native'

import 'react-native-gesture-handler';

import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackPrams';

import IllustrationSettings from '../../assets/icone-settings.png'
import IllustrationBell from '../../assets/icone-bell.png'
import IllustrationSOS from '../../assets/icone_sos.png'

import { styles } from "./styles"

type NotificationsScreenProp = StackNavigationProp<RootStackParamList, 'Notifications'>;

export function Footer(){

    const navigation = useNavigation<NotificationsScreenProp>();

    return(
        <View style={styles.footer}>
            <RectButton style={styles.rectConfig}
                onPress={() => navigation.navigate('Settings')}
            >
                <Image 
                    style={styles.iconConfig}
                    source={IllustrationSettings}
                />                
            </RectButton>

            <RectButton style={styles.buttonSOS}
                onPress={() => navigation.navigate('Sos') } 
                onPress={() => { Linking.openURL('tel:190')} }
            >
                <Image 
                    style={styles.iconSOS}  
                    source={IllustrationSOS}
                />
            </RectButton>

            <RectButton style={styles.rectBell}
                onPress={() => navigation.navigate('Notifications')}
            >
                <Image
                    style={styles.iconBell} 
                    source={IllustrationBell}
                />
            </RectButton>
        </View>
    )
}