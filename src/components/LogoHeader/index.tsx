import React from "react";
import { Image, View } from 'react-native'

import IllustrationImgLogo from '../../assets/Logo_app.png'
import IllustrationImgNameLogo from '../../assets/SafetyGrl2.png'

import { styles } from './styles'

export function LogoHeader(){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={IllustrationImgLogo}
            />
            <Image 
                style={styles.nameLogo}
                source={IllustrationImgNameLogo}
            />
        </View>
    )
}