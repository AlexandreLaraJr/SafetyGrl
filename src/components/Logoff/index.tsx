import React from "react";
import { Image } from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import IllustrationOff from '../../assets/icone_sair.png'

import { styles } from './styles'

export function ButtonLogoff({...rest}: RectButtonProps){
    return(
        <RectButton style={styles.rectOff}
            {...rest} >

            <Image  
                style={styles.iconOff}
                source={IllustrationOff}
            />
            
        </RectButton>
    )
}
