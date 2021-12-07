import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    TextInput,
    Alert
} from 'react-native'

import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

import IllustrationImgLogo from '../../assets/Logo_app.png'
import IllustrationImgNameLogo from '../../assets/SafetyGrl2.png'

import { ButtonCreateAccountSignIn, ButtonIconFacebook, ButtonIconGoogle, ButtonLogin } from "../../components/ButtonIconSignIn"
import { styles } from "./styles"

type createAccountScreenProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;

export function SignIn(){

    const [ cpf, setCPF ] = React.useState('')
    const [ password, setPassword ] = React.useState('')

    const navigation = useNavigation<createAccountScreenProp>();

    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Image
            source={IllustrationImgLogo} 
            style={styles.image}
            />
            
            <Image 
                source={IllustrationImgNameLogo}
                style={styles.nameLogo} 
            />

            <View style={styles.content}>

                <TextInput style={styles.inputLogin} 
                    placeholder=" CPF" 
                    onChangeText={(cpf) => setCPF(cpf)}
                />

                <TextInput style={styles.inputLogin} 
                    placeholder=" Senha"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                
                <Text style={styles.forgotPassword}>Esqueci a senha</Text>
            </View>

            <Text>{"CPF ==> " + cpf}</Text>
            <Text>{"Senha ==> " + password}</Text>

            <ButtonLogin 
                onPress={() => {
                    
                    if(cpf == '123456789' && password == '123456'){
                        navigation.navigate('Home')
                    } else {
                        Alert.alert('CPF ou senha incorretos')
                    }
                }}
            />
            <ButtonCreateAccountSignIn
                onPress={() => navigation.navigate('CreateAccount')}
            />

            <View style={styles.containerIcons}>
                <ButtonIconFacebook />
                <ButtonIconGoogle />
            </View>
            
        </View>
    )
}