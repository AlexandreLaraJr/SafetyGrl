import React from "react"
import { 
    View, 
    Text, 
    Image,
    StatusBar,
    TextInput
} from 'react-native'
import 'react-native-gesture-handler';

import { Footer } from "../../components/Footer";
import { LogoHeader } from "../../components/LogoHeader";

import IllustrationAlert from '../../assets/icone-_alert_1.png';
import IllustrationCalendar from '../../assets/icone-calendar.png';
import IllustrationRelogio from '../../assets/icone-relogio.png';
import IllustrationMapa from '../../assets/icone-mapa.png';

import {RootStackParamList} from '../RootStackPrams';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';

import { styles } from "./styles"
import { ButtonCancelar, ButtonOk } from "../../components/ButtonComplaint";

type RiskAreasScreenProp = StackNavigationProp<RootStackParamList, 'RiskAreas'>;

export function ChangePassword(){

    const navigation = useNavigation<RiskAreasScreenProp>();

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                    
                    <Text style={styles.title}>
                        Alterar Senha
                    </Text>
                

                <View style={styles.content2} >
                    
                    <Text style={styles.items}>
                        Digite a senha atual:
                    </Text>                   
                                        
                    <TextInput style={styles.input} />                                      
                    
                    <Text style={styles.items}>
                        Digite a nova senha: 
                    </Text>                          
                      
                    <TextInput style={styles.input} />                    
                    
                    <Text>
                        Confirme a nova senha:
                    </Text>
                                         
                    <TextInput style={styles.input} />

                    <View style={styles.buttons}>
                        <ButtonOk />
                        <ButtonCancelar 
                            onPress={() => navigation.goBack()}
                        /> 
                    </View> 
                </View>       
            </View>
            <Footer />
        </View>
    )
}