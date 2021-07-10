import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class MyBarters extends React.Component {
    
    static navigationOptions = {header: null}
    
    constructor(){
        super()
        this.state = {
            userID: firebase.auth().currentUser.email,
            allBarters: [],
        }
        this.requestRef = null;
    }

    getAllBarters = () => {
        
    }

    render() {
        return (
            <View>
                <MyHeader navigation = {this.props.navigation} title = "My Barters" />
                <Text>Barter Screen</Text>
            </View>
        )
    }
}