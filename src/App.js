import React from 'react'
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import globalStyle from './styles/globalStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './pages/Home/Home'
import Search from './pages/Search/Search';
import Establishment from './pages/Establishment/Establishment';

const Tab = createMaterialBottomTabNavigator();

export default function App(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                activeColor="#1F1D2B"
                inactiveColor="#FFF"
                barStyle={{ backgroundColor: '#1F1D2B' }}

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Home':
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                                break;

                            case 'Search':
                                iconName = focused
                                    ? 'search'
                                    : 'search-outline';
                                break;

                            case 'Establishment':
                                iconName = focused
                                    ? 'duplicate'
                                    : 'duplicate-outline';
                                break;

                            case 'Map':
                                iconName = focused
                                    ? 'map'
                                    : 'map-outline';
                                break;

                            default:
                                break;
                        }

                        return <Ionicons name={iconName} size={20} color={color} />;
                    },

                    tabBarLabel: false
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Establishment" component={Establishment} />
                <Tab.Screen name="Map" component={Search} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}