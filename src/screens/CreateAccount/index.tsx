import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    Button,
    TextInput
} from 'react-native'

import IllustrationImgLogo from '../../assets/Logo_app.png'
import IllustrationImgNameLogo from '../../assets/SafetyGrl.png'

import { ButtonCreateAccount } from "../../components/ButtonIcon"

import { styles } from "./styles"

export function CreateAccount(){
    return(
        <View style={styles.container} >
            <View style={styles.content}>
                <Image 
                    source={IllustrationImgLogo}
                    style={styles.logo} 
                />

                <Image 
                    source={IllustrationImgNameLogo}
                    style={styles.nameLogo} 
                />
            </View>

            <View style={styles.content2}>
                <Text style={styles.NameData}>
                    Nome
                </Text>
                
                <TextInput style={styles.inputData} />

                <Text style={styles.NameData}>
                    Email
                </Text>
                
                <TextInput style={styles.inputData} />

                <Text style={styles.NameData}>
                    CPF
                </Text>
                
                <TextInput style={styles.inputData} />

                <Text style={styles.NameData}>
                    Telefone
                </Text>
                
                <TextInput style={styles.inputData} />

                <Text style={styles.NameData}>
                    Senha
                </Text>
                
                <TextInput style={styles.inputData} />

                <Text style={styles.NameData}>
                    Confirmar senha
                </Text>
                
                <TextInput style={styles.inputData} />
            </View>
            
            <ButtonCreateAccount />
        </View>
    )
}