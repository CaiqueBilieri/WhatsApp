import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../../components/Header';
import {Archiveds} from '../../components/Archiveds';
import {Chat} from '../../components/Chat';

export function Home() {
    return (
        <View style={styles.container} >
            <Header/>
            <ScrollView>
        <Archiveds/>
        
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});