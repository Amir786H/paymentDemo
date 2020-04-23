/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';

export default class App extends Component {

  // async componentDidMount() {
  //   let razorpay = new Razorpay({
  //     key_id: rzp_test_soswlUI3NjA0N6,
  //     key_secret: JwO7QT6KfE4TxpEwPwfqtdJw,
  //   });

  //   let output;

  //   await razorpay.orders.create({
  //     amount: data['amount'],
  //     currency: data['currency'],
  //     receipt: data['receipt'],
  //     payment_capture: data['payment_capture'],
  //     notes: data['notes']
  //   }).then(async (result) => {
  //     output = result;
  //     let payments = await razorpay.orders.fetchPayments({
  //       amount: data['amount'],
  //       currency: data['currency'],
  //       order_id: String(result.id),
  //       notes: data['notes'],
  //     });
  //     console.log(payments);
  //   }).catch((error) => {
  //     output = data;
  //   });
  // }


   HelloTea() {

    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_soswlUI3NjA0N6',
      amount: '10000',
      name: 'Amir Corp',
      // order_id: 'order_DslnoIgkIDL8Zt',
      // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
      prefill: {
        email: 'finelogics.amir@gmail.com',
        contact: '9005277996',
        name: 'Amir Husain'
      },
      theme: { color: '#53a20e' }
    }

    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }



  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text numberOfLines={2} style={{ fontSize: 40 }} onPress={() => this.HelloTea()}>Amir Payment Demo</Text>
      </View>
    )
  }
}