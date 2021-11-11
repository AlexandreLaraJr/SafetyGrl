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

import IllustrationUser from '../../assets/icone_user.png'
import IllustrationOff from '../../assets/icone_sair.png'
import IllustrationAlert from '../../assets/icone-_alert.png'
import IllustrationDepoiment from '../../assets/icone_depoimento.png'

import { styles } from "./styles"
import { LogoHeader } from "../../components/LogoHeader";
import { RectButton } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";

type RiskAreasScreenProp = StackNavigationProp<RootStackParamList, 'RiskAreas'>;

export function Home(){

    const navigation = useNavigation<RiskAreasScreenProp>();

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                
                <RectButton style={styles.rectUser}>
                    <Image 
                        style={styles.iconUser}
                        source={IllustrationUser}
                    />
                </RectButton>
                    
                <Text style={styles.textName}>
                    Olá, Amanda!
                </Text>

                <RectButton style={styles.rectOff}>
                    <Image  
                        style={styles.iconOff}
                        source={IllustrationOff}
                    />
                </RectButton>
            </View>

            <View style={styles.content2}>
                <Text style={styles.textNameRegiao}>
                    Região de Santos/SP
                </Text>

                <RectButton style={styles.rectMaps} 
                    onPress={() => navigation.navigate('RiskAreas')} 
                />

                <View style={styles.subContent2}> 
                    <RectButton style={styles.contentIconAlert}>
                        <Image
                            style={styles.icon} 
                            source={IllustrationAlert}
                        />
                    </RectButton>

                    <RectButton style={styles.contentIconDepoiment}>
                        <Image
                            style={styles.icon}  
                            source={IllustrationDepoiment}
                        />
                    </RectButton>
                </View>

            </View>

            <Footer />
        </View>
    )
}