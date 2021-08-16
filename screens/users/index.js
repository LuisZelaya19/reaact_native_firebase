import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
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

	return (
		<ScrollView>
			<Button title = "create user" onPress = {() => props.navigation.navigate('UsersCreate')}/>
			{
				users.map(user => {
					
					return (

						<ListItem key={user.id} bottomDivider onPress={() => {
							props.navigation.navigate('UsersEdit', {
								userId: user.id
							})
							}}>
							<ListItem.Content>
							<Avatar source={{
								uri:
								'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
							}} />
								<ListItem.Title>{user.name}</ListItem.Title>
								<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					)

				})
			}
		</ScrollView>
	)

}

export default UsersIndex
