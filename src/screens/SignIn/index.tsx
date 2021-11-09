import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    Button,
    TextInput
} from 'react-native'

import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

import IllustrationImgLogo from '../../assets/Logo_app.png'
import { ButtonIconFacebook, ButtonIconGoogle, ButtonLogin } from "../../components/ButtonIcon"
import { styles } from "./styles"

type createAccountScreenProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;

export function SignIn(){

    const navigation = useNavigation<createAccountScreenProp>();

    function handleSignIn() {
        navigation.navigate('CreateAccount');
    }

    return(
        <View style={styles.container} /*teste*/>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Image
            source={IllustrationImgLogo} 
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
            <ButtonLogin 
                onPress={() => navigation.navigate('CreateAccount')}
            />
            <ButtonIconFacebook />
            <ButtonIconGoogle />
        </View>
    )
}