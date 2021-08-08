import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import UsersIndex from './screens/users/index'
import UsersCreate from './screens/users/create'
import UsersEdit from './screens/users/edit'

function MyStack()
{
	return (
		<Stack.Navigator>
			<Stack.Screen name="UsersCreate" component={UsersCreate}/>
			<Stack.Screen name="UsersIndex" component={UsersIndex}/>
			<Stack.Screen name="UsersEdit" component={UsersEdit}/>
		</Stack.Navigator>
	)
}

export default function App() {
  return (
	  <NavigationContainer>
		  <MyStack/>
	  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
