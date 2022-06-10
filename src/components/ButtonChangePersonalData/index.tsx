import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

export function ButtonOkData({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.container} 
            {...rest} >
            <Text style={styles.titleButton}>Ok</Text>
        </RectButton>
    )
}

export function ButtonCancelarData({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.container} 
            {...rest} >
            <Text style={styles.titleButton}>Cancelar</Text>
        </RectButton>
    )
}