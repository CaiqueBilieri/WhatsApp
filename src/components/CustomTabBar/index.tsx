import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.content} >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({name: route.name, merge: true });
                        }
                    };

                        const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return(
                        <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.buttonTab}
                        >
                            <View style={{alignItems:'center', padding: 6}} >
                                <View style={[styles.innerButton, {backgroundColor: isFocused ? '#292929' : 'transparent'}]}>
                                <MaterialIcons 
                                name={options.tabBarIcon} 
                                size={30} 
                                color={isFocused ? "#1cfd60" : "#fff"} 
                                />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                })}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        borderRadius: 99,
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 38 : 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -5,
        backgroundColor: 'rgba(61, 61, 61, 0.9)',
        gap: 15,
        elevation: 10,
    },

    buttonTab:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerButton:{
        padding: 7, 
        borderRadius: 99,
    }
})
