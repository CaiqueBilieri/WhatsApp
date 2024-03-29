import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

export function Archiveds() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.container} >
                    <Ionicons name="archive-outline" size={23} color="white" />

                <View style={styles.component} >
                    <Text style={styles.text}>Arquivadas</Text>
                </View>

                <View>
                    <Text style={styles.counter}>
                        3
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.COLORS.GRAY_600,
        paddingTop: 15,
        paddingBottom: 15,
        paddingStart: 20, 
        flexDirection:'row',
    },

    component:{
        flex: 1,
        justifyContent: 'center',
        paddingStart: 25
    },

    text:{
        color: theme.COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.MD,
    },

    counter:{
        color: theme.COLORS.GREEN_700,
        paddingEnd: 18,
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.MD,
    }
});