import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'
import { Header, Icon } from 'react-native-elements';

export default class ReciverDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: firebase.auth().currentUser.email,
            recieverID: this.props.navigation.getParam('details')["username"],
            exchangeID: this.props.navigation.getParam('details')["exchangeID"],
            itemName: this.props.navigation.getParam('details')["item_name"],
            description: this.props.navigation.getParam('details')["description"],
            reciverName: '',
            recieverContact: '',
            recieverAdress: '',
            reciverRequestDocID: '',
        }
    }

    getReciverDetails = () => {
        console.log("inside Get reciever details screen")
        db.collection('users').where('EmailId', '==', this.state.recieverID).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log("getting users")
                    this.setState({
                        reciverName: doc.data().first_name,
                        recieverContact: doc.data().mobile_number,
                        recieverAdress: doc.data().address,
                    })
                })
            })
        db.collection('exchange_requests').where('exchange_id', '==', this.state.exchangeID).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log("Getting Exchanges")
                    this.setState({
                        reciverRequestDocID: doc.id
                    })
                })
            })
    }

    updateBarterStatus = () => {
        db.collection('all_barters').add({
            item_name: this.state.itemName,
            exchangeID: this.state.exchangeID,
            requested_by: this.state.reciverName,
            donor_id: this.state.userID,
            request_status: "Exchange Interested"
        })
    }

    componentDidMount = () => {
        this.getReciverDetails()
    }

    render() {
        return (
            <View>
                {/* <Header
                    leftComponent={<Icon name='arrow-left'
                        type='feather'
                        color='#696969'
                        onPress={
                            () => this.props.navigation.goBack()
                        }
                    />}
                    centerComponent={
                        {
                            text: "Exchange Items",
                            style:
                            {
                                color: '#90A5A9',
                                fontSize: 20,
                                fontWeight: "bold",
                            }
                        }}
                    backgroundColor="#eaf8fe" /> */}
                <Text> Reciver Details </Text>
            </View>
        )
    }
}