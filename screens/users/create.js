import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

const UsersCreate = () => {

	const[state, setState] = useState({
		name: '',
		email: '',
		phone: ''
	})

	const handleChangeValue = (name, value) => {
		setState({...state, [name]:value})
	}

	return (
		<ScrollView style = {styles.container}>
			<View style= {styles.inputGroup}>
				<TextInput placeholder="Username" onChangeText = {(value) => handleChangeValue('name', value)} />
			</View>
			<View style = {styles.inputGroup}>
				<TextInput placeholder="email" onChangeText = {(value) => handleChangeValue('email', value)}/>
			</View>
			<View style = { styles.inputGroup }>
				<TextInput placeholder="phone" onChangeText = {(value) => handleChangeValue('phone', value)}/>
			</View>
			<View>
				<Button title = "Save" onPress = {() => console.log(state)} />
			</View>
		</ScrollView>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30
	},
	inputGroup: {
		flex: 1,
		padding: 0,
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	}
})

export default UsersCreate
