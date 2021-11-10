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
        <RectButton style={styles.containerLogin} 
            {...rest} >
            <Text style={styles.titleLogin}>LOGIN</Text>
        </RectButton>
    )
}

export function ButtonCreateAccountSignIn({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.containerCriarConta}
            {...rest} >
            <Text style={styles.titleCriarConta}>CRIAR CONTA</Text>
        </RectButton>
    )
}

export function ButtonIconFacebook(){
    return(
        <RectButton style={styles.iconWrapperFacebook}>
            <Image source={FacebookLogo} style={styles.icon}/>
        </RectButton>    
    )
}

export function ButtonIconGoogle(){
    return(        
        <RectButton style={styles.iconWrapperGoogle}>
            <Image source={GoogleLogo} style={styles.icon}/>
        </RectButton>
    )
}




