import React from "react";
import {
    Text,
    Image,
    View,
} from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

export function ButtonCreateAccount({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.containerCreateAccountConfirm}
            {...rest} >
            <Text style={styles.titleCriarContaConfirm}>CRIAR CONTA</Text>
        </RectButton>
    )
}