import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    Button,
    TextInput
} from 'react-native'

import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

import { ButtonCreateAccount } from '../../components/ButtonIconCreateAccount'

import { styles } from "./styles"
import { LogoHeader } from "../../components/LogoHeader";

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function CreateAccount(){

    const navigation = useNavigation<HomeScreenProp>();

    return(
        <View style={styles.container} >
            
            <LogoHeader />

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

            <ButtonCreateAccount 
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}