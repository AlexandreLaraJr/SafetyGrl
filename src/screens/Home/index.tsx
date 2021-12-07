import React from "react"
import { 
    View, 
    Text, 
    Image,
    TextInput
} from 'react-native'

import MapView from 'react-native-maps';

import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

import IllustrationSearch from '../../assets/icon-search.png'

import { styles } from "./styles"
import { LogoHeader } from "../../components/LogoHeader";
import { RectButton } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import { ButtonComplaint, ButtonUser, ButtonStatement } from "../../components/ButtonHome";
import { ButtonLogoff } from "../../components/Logoff";

type RiskAreasScreenProp = StackNavigationProp<RootStackParamList, 'RiskAreas'>;

export function Home(){

    const navigation = useNavigation<RiskAreasScreenProp>();

    let points = [{latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},
        {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},
        {latitude: 6.841776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},
        {latitude: 6.841776681, longitude: 79.869319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},

];

    return(
        <View style={styles.container}>
            
            <LogoHeader />
           
            <View style={styles.content}>

                <ButtonUser
                    onPress={() => navigation.navigate('User')}
                />

                <Text style={styles.textName}>
                    Olá!
                </Text>

               <ButtonLogoff 
                    onPress={() => navigation.navigate('SignIn')}
               />
            </View>

            <View style={styles.content2}>

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
               
                <View style={{ alignSelf: 'center', marginTop: 10, borderRadius: 10, overflow: 'hidden' }}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: -23.94177584803194,
                            longitude: -46.326133375794406,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05,
                        }}
                    >
                    </MapView>
                </View>

                <Text style={styles.textNameRegiao}>
                    Região de Santos/SP
                </Text>                              
                  
                <View style={styles.subContent2}> 
                    <ButtonComplaint
                        onPress={() => navigation.navigate('Complaint')}
                    />

                    <ButtonStatement
                        onPress={() => navigation.navigate('Statements')}
                    />                        
                </View>
            </View>
        <Footer />            
    </View>
)}
