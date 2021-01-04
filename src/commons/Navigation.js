import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movie from '../components/Movie';
import List from '../components/List';
import Likes from '../components/Likes';
//import { List } from 'react-native-paper';

const Tab = createBottomTabNavigator();

class Navigation extends React.Component{

    render () {
        return(
            <View style={{flex:1,backgroundColor:'green'}}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Movie" component={Movie} options={{
                            tabBarIcon: ({ color,size }) => (
                                <Ionicons name='film' color='black' size={25} />
                            ),
                        }} />
                        {/* <Tab.Screen name="Likes" component={Likes} options={{
                            tabBarIcon: ({ color,size }) => (
                                <Ionicons name='heart'  color='black' size={25} />
                            ),

                        }} /> */}
                        <Tab.Screen name="List" component={List} options={{
                            tabBarIcon: ({ color,size }) => (
                                <Ionicons name='list'  color='black' size={25} />
                            ),

                        }} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        );
    }
};

export default Navigation;