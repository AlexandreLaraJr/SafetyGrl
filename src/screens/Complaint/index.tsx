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

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function Complaint(){

    const navigation = useNavigation<ScreenProp>();

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                <View style={styles.contentTitle}> 
                    <Image
                        style={styles.iconAlert}
                        source={IllustrationAlert}
                    />
                    <Text style={styles.title}>
                        Fazer Denúncia
                    </Text>
                </View>

                <View style={styles.content2} >
                    <View style={styles.contentItems} >
                        <Text style={styles.items}>
                            Descrição do crime:
                        </Text>
                        <Text style={styles.textRed}>
                            *
                        </Text>
                    </View>

                    <View style={styles.contentIcon}>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.content3} >
                        <View>
                            <View style={styles.contentItems} >
                                <Text style={styles.items}>
                                    Data:
                                </Text>
                                <Text style={styles.textRed}>
                                    *
                                </Text>
                            </View>

                            <View style={styles.contentIcon} >
                                <TextInput style={styles.inputHalf} />
                                <Image 
                                    style={styles.icon}
                                    source={IllustrationCalendar}
                                />
                            </View>
                        </View>

                        <View>
                            <View style={styles.contentItems} >
                                <Text style={styles.items}>
                                    Horário:
                                </Text>
                                <Text style={styles.textRed}>
                                    *
                                </Text>
                            </View>

                            <View style={styles.contentIcon} >
                                <TextInput style={styles.inputHalf}/>
                                    <Image 
                                    style={styles.icon}
                                    source={IllustrationRelogio}
                                /> 
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.contentItems} >
                            <Text style={styles.items}>
                                Local: 
                            </Text>
                            <Text style={styles.textRed}>
                                *
                            </Text>
                        </View>

                        <View style={styles.contentIcon} >
                            <TextInput style={styles.input} />
                            <Image 
                                style={styles.icon}
                                source={IllustrationMapa}
                            />
                        </View>
                    </View>

                    <Text style={styles.title2}>
                        Características do agressor 
                    </Text>
                
                    <View style={styles.content3} >
                        <View>
                            <View style={styles.contentItems} >
                                <Text style={styles.items}>
                                    Altura:
                                </Text>                               
                            </View>

                            <View style={styles.contentIcon} >
                                <TextInput style={styles.inputHalf} />
                            </View>
                        </View>

                        <View style={styles.contentItems2}>
                            <View  style={styles.contentItems}>
                                <Text style={styles.items}>
                                    Idade:
                                </Text>
                            </View>

                            <View style={styles.contentIcon} >
                                <TextInput style={styles.inputHalf} />  
                            </View>
                        </View>
                    </View>
                    
                    <Text style={styles.contentItems}>
                        Outros:
                     </Text>

                    <View style={styles.contentIcon} >                        
                        <TextInput style={styles.input} placeholder=" Roupas, cor da pele, cor do cabelo" />                        
                    </View>

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