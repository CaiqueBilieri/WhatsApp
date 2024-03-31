import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../theme';

export function Chat() {
    return (
        <TouchableOpacity activeOpacity={0.8} >
            <View style={styles.container} >
                <View style={styles.photo} >
                    <AntDesign name="user" size={30} color="black" />
                </View>
                
                <View style={styles.text} >
                    <Text style={styles.name} >
                        <Text>Caique</Text>
                    </Text>
                    <Text style={styles.messages} >
                        Ultima mensagem para ser lida na conversa
                    </Text>
                </View>

                <Text style={styles.data} >
                    13:09
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
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

    text:{
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

    data: {
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.PQ,
        color: theme.COLORS.GRAY_300,
    }
});