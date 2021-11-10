import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    TextInput
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
                <TextInput style={styles.inputLogin}>  CPF</TextInput>
                <TextInput style={styles.inputLogin}>  Senha</TextInput>
            </View>

            <ButtonLogin 
                //onPress={() => navigation.navigate('CreateAccount')}
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