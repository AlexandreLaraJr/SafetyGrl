import React from "react"
import { 
    View, 
    Text, 
    Image,
} from 'react-native'

import { RectButton, RectButtonProps} from "react-native-gesture-handler";

import IllustrationUser from '../../assets/icone_user.png'
import IllustrationComplaint from '../../assets/icone-_alert.png'

import { styles } from "./styles"

export function ButtonOk({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.button}
            {...rest} >
            <Text style={styles.textOk}>
                 OK
            </Text>
        </RectButton>
    )
}

export function ButtonCancelar({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.button}
            {...rest} >
            <Text style={styles.textCancel}>
                CANCELAR
            </Text>
        </RectButton>
    )
}