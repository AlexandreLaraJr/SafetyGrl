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

export function ButtonUser({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.rectUser}
            {...rest} >
            <Image 
                style={styles.iconUser}
                source={IllustrationUser}
            />
        </RectButton>
    )
}

export function ButtonComplaint({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.contentIconAlert}
            {...rest} >
            <Image 
                style={styles.iconComplaint}
                source={IllustrationComplaint}
            />
        </RectButton>
    )
}