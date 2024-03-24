import { View, Text, StyleSheet, } from 'react-native';
import theme from '../../theme'

export function Header() {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >
                Whatsapp
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.COLORS.GRAY_600
    },

    text:{
        fontSize: theme.FONT_SIZE.XG,
        color: theme.COLORS.WHITE
    }
});