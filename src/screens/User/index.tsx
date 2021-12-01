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

import IllustrationUser from '../../assets/icone_user.png'

import { styles } from "./styles"
import { LogoHeader } from "../../components/LogoHeader";
import { Footer } from "../../components/Footer";
import { ButtonAlterarSenha, ButtonEditarDados } from "../../components/ButtonUser";

type ChangePasswordScreenProp = StackNavigationProp<RootStackParamList, 'ChangePassword'>;

export function User(){

    const navigation = useNavigation<ChangePasswordScreenProp>();

    return(
        <View style={styles.container}>
            <LogoHeader />

            <View style={styles.content}>
                <View style={styles.contentTitle}> 
                    <Image
                        style={styles.iconUser}
                        source={IllustrationUser}
                    />
                    <Text style={styles.title}>
                        Dados Pessoais
                    </Text>
                </View>

                <View style={styles.contentDatas} >
                    <Text style={styles.datas}>
                        NOME
                    </Text>
                    
                    <View style={styles.contentPersonalDatas} >
                        <Text style={styles.personalDatas} >
                            Amanda Gomes
                        </Text>
                    </View>

                    <Text style={styles.datas}>
                        EMAIL
                    </Text>
                    
                    <View style={styles.contentPersonalDatas} >
                        <Text style={styles.personalDatas} >
                            amanda.gomes@gmail.com
                        </Text>
                    </View>

                    <Text style={styles.datas}>
                        CPF
                    </Text>
                    
                    <View style={styles.contentPersonalDatas} >
                        <Text style={styles.personalDatas} >
                            123.456.789.10
                        </Text>
                    </View>

                    <Text style={styles.datas}>
                        TELEFONE
                    </Text>
                    
                    <View style={styles.contentPersonalDatas} >
                        <Text style={styles.personalDatas} >
                            (13) 4002-8922
                        </Text>
                    </View>
                </View>

                <View style={styles.contentEdit}>
                    <ButtonEditarDados />

                    <ButtonAlterarSenha 
                        onPress={() => navigation.navigate('ChangePassword')}
                    /> 
                </View>
            </View>

            <Footer />
        </View>
    )
}
