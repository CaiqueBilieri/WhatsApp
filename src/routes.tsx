import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Home} from './screens/Home'
import {Updates} from './screens/Updates'
import {Communities} from './screens/Communities'
import {Calls} from './screens/Calls'
import CustomTabBar from './components/CustomTabBar'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff',
            
            tabBarStyle:{
                borderTopWidth: 0,
                backgroundColor: '#000000',
            }
        }}

        tabBar={ (props) => <CustomTabBar {...props} />}

        >
            <Tab.Screen
                name="Conversas" 
                component={Home}
                options={{
                    tabBarIcon:'chat'
                }}
            />

            <Tab.Screen 
                name="Atualizações" 
                component={Updates}
                options={{
                    tabBarIcon:'add-to-photos'
                }}
            />

            <Tab.Screen 
                name="Comunidades" 
                component={Communities}
                options={{
                    tabBarIcon:'people-alt'
                }}
            />

            <Tab.Screen 
                name="Ligações" 
                component={Calls}
                options={{
                    tabBarIcon:'call'
                }}
            />
            
        </Tab.Navigator>
    )
}
