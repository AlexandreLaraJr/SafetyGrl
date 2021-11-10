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


export function Home(){

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                <Image 
                    style={styles.iconUser}
                    source={IllustrationUser}
                />
                    
                <Text style={styles.textName}>
                    Olá, Amanda!
                </Text>

                <Image  
                    style={styles.iconOff}
                    source={IllustrationOff}
                />
            </View>

            <View style={styles.content2}>
                <Text style={styles.textNameRegiao}>
                    Região de Santos/SP
                </Text>

                <View style={styles.subContent2}> 
                    <View style={styles.contentIconAlert}>
                        <Image
                            style={styles.icon} 
                            source={IllustrationAlert}
                        />
                    </View>

                    <View style={styles.contentIconDepoiment}>
                        <Image
                            style={styles.icon}  
                            source={IllustrationDepoiment}
                        />
                    </View>
                </View>

            </View>

        </View>
    )
}