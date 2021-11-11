import React from "react"
import { View, Image } from 'react-native'

import 'react-native-gesture-handler';

import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
//import {RootStackParamList} from '../RootStackPrams';

import IllustrationSettings from '../../assets/icone-settings.png'
import IllustrationBell from '../../assets/icone-bell.png'
import IllustrationSOS from '../../assets/icone_sos.png'

import { styles } from "./styles"

export function Footer(){

    return(
        <View style={styles.footer}>
            <RectButton style={styles.rectConfig}>
                <Image 
                    style={styles.iconConfig}
                    source={IllustrationSettings}
                />
            </RectButton>

            <RectButton style={styles.buttonSOS}>
                <Image 
                    style={styles.iconSOS}  
                    source={IllustrationSOS}
                />
            </RectButton>

            <RectButton style={styles.rectBell}>
                <Image
                    style={styles.iconBell} 
                    source={IllustrationBell}
                />
            </RectButton>
        </View>
    )
}