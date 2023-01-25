import React from "react";
import MyBooks from "../screens/MyShelf";
import SearchBooks from "../screens/SearchBooks";
import Settings from "../screens/Settings";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'My Shelf') {
                        iconName = focused
                            ? 'bookmark'
                            : 'bookmark-outline';
                    }
                    if (route.name === 'Add Books') {
                        iconName = focused
                            ? 'add-circle'
                            : 'add-circle-outline';
                    }
                    else if (route.name === 'Settings') {
                        iconName = focused
                            ? 'settings'
                            : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#6B9080',
                tabBarInactiveTintColor: '#353535',
            })}
        >
            <Tab.Screen name="My Shelf" component={MyBooks}/>
            <Tab.Screen name="Add Books" component={SearchBooks}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>

    );
}
export default Tabs;
