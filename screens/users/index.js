import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Button, Alert} from 'react-native'
import firebase from '../../database/firebase'
import { Avatar, ListItem } from 'react-native-elements'

const UsersIndex = (props) => {

	const [users, setUsers] = useState([])

	useEffect(() => {
		firebase.db.collection('users').onSnapshot((querySnapshot) => {

			const users = []

			querySnapshot.docs.forEach((doc) => {
				const {name, email, phone} = doc.data()

				users.push({
					id: doc.id,
					name,
					email,
					phone
				})
			})	

			setUsers(users)
		})
	}, [])

	const deleteUser = async (id) => {
			const query = firebase.db.collection('users').doc(id)
			await query.delete()
			props.navigation.navigate('UsersIndex')
	}

	const deleteConfirmationAlert = (id) => {
		Alert.alert('Delete user', 'Are you sure?', [
			{text: 'Yes', onPress: () => deleteUser(id)},
			{text: 'No', onPress: () => console.log(false)},
		])	
	}

	return (
		<ScrollView>
			<Button title = "create user" onPress = {() => props.navigation.navigate('UsersCreate')}/>
			{
				users.map(user => {
					
					return (

						<ListItem key={user.id} bottomDivider>
							<ListItem.Content>
							<Avatar source={{
								uri:
								'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
							}} />
								<ListItem.Title>{user.name}</ListItem.Title>
								<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
								<Button color="#17a008" title = "Edit user" onPress = {() => props.navigation.navigate('UsersEdit', {
									userId: user.id
								})}/>
								<Button color="#db182e" title = "Delete user" onPress = {() => deleteConfirmationAlert(user.id)}/>
							</ListItem.Content>
						</ListItem>
					)

				})
			}
		</ScrollView>
	)

}

export default UsersIndex
