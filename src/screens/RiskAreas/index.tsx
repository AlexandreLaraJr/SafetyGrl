import React from "react"
import { 
    View, 
    Text, 
    Image,
    TextInput
} from 'react-native'
import 'react-native-gesture-handler';

import { RectButton } from "react-native-gesture-handler";

//import { Footer } from "../../components/Footer";
import { LogoHeader } from "../../components/LogoHeader";

import IllustrationSearch from '../../assets/icon-search.png'

import {RootStackParamList} from '../RootStackPrams';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';

import { styles } from "./styles"

export function RiskAreas(){

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Áreas de Risco 
                </Text>

                <View style={styles.contentSearch} >
                    <TextInput style={styles.search} />
                    <RectButton style={styles.rectSearch}>
                        <Image
                            style={styles.iconSearch}
                            source={IllustrationSearch}
                        />
                    </RectButton>
                </View>

                <Text style={styles.subtitle}>
                    Áreas de risco próximas de você
                </Text>
                 
                <Text style={styles.textRegion}>
                    Região de Santos/SP
                </Text>
            </View>
            
        </View>
    )
}