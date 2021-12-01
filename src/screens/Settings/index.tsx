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
import IllustrationSettings from '../../assets/icone-settings.png';
import IllustrationBell from '../../assets/icone-bell.png';
import IllustrationMaps from '../../assets/icone_mapa.png';
import IllustrationPhone from '../../assets/akar-icons_phone.png';

import {RootStackParamList} from '../RootStackPrams';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';

import { styles } from "./styles"
import { ButtonCancelar, ButtonOk } from "../../components/ButtonComplaint";



export function Settings(){

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                <View style={styles.contentTitle}> 
                    <Image
                        style={styles.iconAlert}
                        source={IllustrationSettings}
                    />
                    <Text style={styles.title}>
                        Configurações
                    </Text>
                </View>

                <View style={styles.content2} >

                    <View style={styles.contentItems} >
                        <Image
                            style={styles.icon2}
                            source={IllustrationBell}
                        />
                        <Text style={styles.items}>
                            Notificações
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        Mostrar notificações
                    </Text>

                    <Text style={styles.text}>
                        Mostrar pré-visualização
                    </Text>

                    <Text style={styles.text}>
                        Som
                    </Text>

                    <View style={styles.contentItems} >
                        <Image
                            style={styles.icon2}
                            source={IllustrationMaps}
                        />
                        <Text style={styles.items}>
                            Região
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        Definir localização padrão
                    </Text>

                    <Text style={styles.text}>
                        Usar localização atual
                    </Text>

                    <View style={styles.contentItems} >
                        <Image
                            style={styles.icon2}
                            source={IllustrationPhone}
                        />
                        <Text style={styles.items}>
                            Chamadas
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        Permitir acesso às chamadas {"\n"}
                        (Recomendado)                        
                    </Text>
                             
                </View>       
            </View>
            <Footer />
        </View>
    )
}