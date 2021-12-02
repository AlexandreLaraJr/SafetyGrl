import React from "react";
import { Text } from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

export function ButtonCancelar({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.containerLogin} 
            {...rest} >
            <Text style={styles.titleLogin}>CANCELAR</Text>
        </RectButton>
    )
}




