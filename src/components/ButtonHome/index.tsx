import React from "react"
import { 
    View, 
    Text, 
    Image,
} from 'react-native'

import { RectButton, RectButtonProps} from "react-native-gesture-handler";

import IllustrationUser from '../../assets/icone_user.png'
import IllustrationComplaint from '../../assets/icone-_alert.png'
import IllustrationBack from '../../assets/bi_arrow-left.png'
import IllustrationStatement from '../../assets/icone_depoimento.png'

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
export function ButtonStatement({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.contentIconDepoiment}
            {...rest} >
            <Image
                style={styles.icon}  
                source={IllustrationStatement}
            />
        </RectButton>
    )
}

export function ButtonBack({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.contentBack}
            {...rest} >
            <Image 
                style={styles.icon}
                source={IllustrationBack}
            />
        </RectButton>
    )
}