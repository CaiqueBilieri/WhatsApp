import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import theme from '../../theme';

import {Header} from '../../components/Header';

export function Updates() {
    return (
        <View>
            <Header/>
            <View style={styles.container} >
                
                <View style={styles.component} >
                    <Text style={styles.text}>Status</Text>
                </View>
                
                <View style={styles.icons} >
                    <TouchableOpacity><Entypo name="dots-three-vertical" size={24} color="white" /></TouchableOpacity>
                </View>
            </View>


            <TouchableOpacity activeOpacity={0.9} >
            <View style={styles.boxUpdate} >
                <View style={styles.photo} >
                    <AntDesign name="user" size={30} color="black" />
                </View>
                
                <View style={styles.textBox} >
                    <Text style={styles.name}>
                        Meu status
                    </Text>

                    <Text style={styles.messages} >
                        Toque para atualizar seu status
                    </Text>
                </View>

                <View style={styles.circleAdd} >
                    <Text style={styles.add}>
                        +
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.COLORS.GRAY_500,
        paddingTop: 15,
        paddingBottom: 15,
        paddingStart: 20, 
        flexDirection:'row',
    },

    component:{
        justifyContent: 'center',
        paddingStart: 25
    },

    text:{
        color: theme.COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.GR,
    },

    icons:{
        flex: 1,
        paddingStart: 280
    },

    boxUpdate: {
        backgroundColor: theme.COLORS.GRAY_500,
        padding: 14,
        flexDirection:'row'
    },

    photo:{
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.GRAY_300,
    },

    textBox:{
        paddingStart: 15,
        flex:1,
    },

    name:{
        color: theme.COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.MD
    },

    messages:{
        color: theme.COLORS.GRAY_300,
    },

    circleAdd:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.GREEN,
        borderRadius: 100,
        width: 23,
        height: 23,
        position: 'absolute',
        bottom: 8,
        left: 45,
    },

    add:{
        fontSize: theme.FONT_SIZE.MD,
        fontWeight: 'bold',
    }
});