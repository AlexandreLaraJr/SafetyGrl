import { 
    View, 
    Text, 
}from 'react-native'

import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

import { styles } from "./styles"
import { LogoHeader } from "../../components/LogoHeader";

import { Footer } from "../../components/Footer";
import { ButtonCancelar } from "../../components/ButtonSOS";

type ScreenProp = StackNavigationProp<RootStackParamList, 'Statements2'>;

export function Sos(){

    const navigation = useNavigation<ScreenProp>();

    return(
        <View style={styles.container}>
            
            <LogoHeader />
           
            <View style={styles.content}>
                
                <View style={styles.contentTitle}>
                    <Text style={styles.title}>
                        O botão SOS foi acionado {"\n \n"}

                        A ligação para polícia será realizada em...
                    </Text>

                    <ButtonCancelar 
                        onPress={() => navigation.goBack()}
                    />
                </View>

            </View>
            <Footer />
        </View>
    )
}

