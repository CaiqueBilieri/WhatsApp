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
                    <Text>
                        Digitando...
                    </Text>
                </View>

                <Text>
                    Data
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.RED_DARK,
        padding: 14,
        flexDirection:'row'
    },

    photo:{
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.GREEN_500,
    },

    text:{
        paddingStart: 15,
        backgroundColor: theme.COLORS.GREEN_500,
        flex:1
    },

    name:{
        color: theme.COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.MD
    }
});