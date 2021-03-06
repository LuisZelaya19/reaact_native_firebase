import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, TextInput, Button, StyleSheet} from 'react-native'
import firebase from '../../database/firebase'

const UsersEdit = (props) => {

	const initialState = {
		id: '',
		name: '',
		email: '',
		phone: ''
	}

	const[user, setUser] = useState(initialState)

	const getUserById = async (id) => {
		const query = firebase.db.collection('users').doc(id)
		const doc = await query.get()
		const user = doc.data()

		setUser({
			...user,
			id: doc.id,
		})
	}

	const updateUser = async () => {
		const query = firebase.db.collection('users').doc(user.id)
		const doc = await query.set({
			name: user.name,
			email: user.email,
			phone: user.phone
		})

		setUser(initialState)

		props.navigation.navigate('UsersIndex')
	}

	useEffect(() => {
		getUserById(props.route.params.userId)
	}, [])

	const handleChangeValue = (name, value) => {
		setUser({...user, [name]:value})
	}

	return (
		<ScrollView style = {styles.container}>
			<View style= {styles.inputGroup}>
				<TextInput 
				value={user.name} placeholder="Username" onChangeText = {(value) => handleChangeValue('name', value)} />
			</View>
			<View style = {styles.inputGroup}>
				<TextInput value={user.email} placeholder="email" onChangeText = {(value) => handleChangeValue('email', value)}/>
			</View>
			<View style = { styles.inputGroup }>
				<TextInput value={user.phone} placeholder="phone" onChangeText = {(value) => handleChangeValue('phone', value)}/>
			</View>
			<View>
				<Button title = "Edit" onPress = {() => updateUser()} />
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

export default UsersEdit
