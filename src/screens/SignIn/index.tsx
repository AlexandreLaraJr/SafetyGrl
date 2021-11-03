import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    Button
} from 'react-native'

import IllustrationImg from '../../assets/Logo_app.png' 
import { ButtonIconFacebook, ButtonIconGoogle } from "../../components/ButtonIcon"
import { styles } from "./styles"

export function SignIn(){
  return(
    <View style={styles.container} /*teste*/>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
        />

        <Image
        source={IllustrationImg} 
        style={styles.image}
        //resizeMode= "cover" //n sei o que faz
        />
        
        <View style={styles.content}>

            <Text style={styles.title}>
                SafetyGrl
            </Text>

            <Text style={styles.subtitle}>
                teste do git diff
            </Text>
            
        </View>
        
        <ButtonIconFacebook />
        <ButtonIconGoogle />
    </View>
  )
}
