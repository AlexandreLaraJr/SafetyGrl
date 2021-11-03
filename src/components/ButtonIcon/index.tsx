import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'

import FacebookLogo from '../../assets/icone_facebook.png'
import GoogleLogo from '../../assets/icone_google.png'

import { styles } from './styles'

export function ButtonIconFacebook(){
    return(
        <TouchableOpacity style={styles.containerFacebook}>
            <View style={styles.iconWrapperFacebook}>
                <Image source={FacebookLogo} style={styles.icon}/>
            </View>
            
        </TouchableOpacity>
    )
    
}

export function ButtonIconGoogle(){
    return(
        <TouchableOpacity style={styles.containerGoogle}>
            <View style={styles.iconWrapperGoogle}>
                <Image source={GoogleLogo} style={styles.icon}/>
            </View>

        </TouchableOpacity>
    )
}
