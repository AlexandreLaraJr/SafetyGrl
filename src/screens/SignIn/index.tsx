import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    Button,
    TextInput
} from 'react-native'

import IllustrationImg from '../../assets/Logo_app.png'
import { ButtonIconFacebook, ButtonIconGoogle, ButtonLogin } from "../../components/ButtonIcon"
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
        
        />
        
        <View style={styles.content}>

            <Text style={styles.title}>
                SafetyGrl
            </Text>

            <Text style={styles.subtitle}>
                teste do git diff
            </Text>
            <TextInput style={styles.inputLogin}>CPF</TextInput>
            <TextInput style={styles.inputLogin}>Senha</TextInput>
        </View>
        <ButtonLogin />
        <ButtonIconFacebook />
        <ButtonIconGoogle />
    </View>
  )
}

//edição 2