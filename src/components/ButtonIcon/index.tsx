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

export function ButtonLogin({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.container} 
            {...rest} >
            <Text style={styles.title}>Login</Text>
        </RectButton>
    )
}

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

export function ButtonCreateAccount(){
    return(
        <RectButton style={styles.containerCriarConta}>
            <Text style={styles.titleCriarConta}>CRIAR CONTA</Text>
        </RectButton>
    )
}
