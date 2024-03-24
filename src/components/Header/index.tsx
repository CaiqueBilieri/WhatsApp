import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Feather, FontAwesome6, Entypo} from '@expo/vector-icons';
import theme from '../../theme'

export function Header() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.text} >
                Whatsapp
            </Text>
            <View style={styles.icons} >
                <Feather name="camera" size={24} color="white" />
                <FontAwesome6 name="magnifying-glass" size={24} color="white" />
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.COLORS.GRAY_600,
        paddingTop: 45,
        paddingBottom: 10,
        paddingStart: 14,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },

    text:{
        fontSize: theme.FONT_SIZE.XG,
        color: theme.COLORS.WHITE,
        fontWeight: 'bold',
    },

    icons:{
        flexDirection: 'row',
    }
});