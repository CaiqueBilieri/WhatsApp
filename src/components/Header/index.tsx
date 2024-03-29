import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { Feather, FontAwesome6, Entypo} from '@expo/vector-icons';

import {Archiveds} from '../Archiveds';
import {Chat} from '../Chat';

import theme from '../../theme';

export function Header() {
    return (
        <View>
            <SafeAreaView style={styles.container} >
                <View>
                    <Text style={styles.text} >
                        Whatsapp
                    </Text>
                </View>
                <View style={styles.icons} >
                    <TouchableOpacity><Feather name="camera" size={24} color="white" /></TouchableOpacity>
                    
                    <TouchableOpacity><FontAwesome6 name="magnifying-glass" size={24} color="white" /></TouchableOpacity>
                    
                    <TouchableOpacity><Entypo name="dots-three-vertical" size={24} color="white" /></TouchableOpacity>
                    
                </View>
            </SafeAreaView>

        <Archiveds/>

        <Chat/>

        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.COLORS.GRAY_400,
        paddingTop: 45,
        paddingBottom: 10,
        paddingStart: 14,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },


    text:{
        fontSize: theme.FONT_SIZE.XG,
        color: theme.COLORS.WHITE,
        fontWeight: 'bold',

    },

    icons:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingStart: 165
    }
});