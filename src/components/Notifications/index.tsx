import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import FacebookLogo from '../../assets/icone_facebook.png'
import GoogleLogo from '../../assets/icone_google.png'

import { styles } from './styles'

export function ButtonClear({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.container} 
            {...rest} >
            <Text style={styles.titleButton}>Limpar Notificações</Text>
        </RectButton>
    )
}

