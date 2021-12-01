import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    TextInput
} from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

import IllustrationBell from '../../assets/icone-bell.png';

import { styles } from "./styles"
import { LogoHeader } from "../../components/LogoHeader";
import { Footer } from "../../components/Footer";
import { ButtonAlterarSenha, ButtonEditarDados } from "../../components/ButtonUser";
import { ButtonClear } from "../../components/Notifications";

export function Notifications(){
    
    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                <View style={styles.contentTitle}> 
                    <Image
                        style={styles.iconUser}
                        source={IllustrationBell}
                    />
                    <Text style={styles.title}>
                        Notificações
                    </Text>
                </View>
                
                <ButtonClear />
            </View>
            
            <Footer />
        </View>
    )
}
