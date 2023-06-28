import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../screens/Register';
import Otp from '../../screens/Otp';
import Appeal from '../../screens/Appeal';
import Order from '../../screens/Order';
import Formalization from '../../screens/Formalization';
import Reject from '../../screens/Reject';
import Accept from '../../screens/Accept';
import Confirm from '../../screens/Confirm';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Register} name="RegisterScreen"/>
        <Stack.Screen component={Otp} name="OtpScreen"/>
        <Stack.Screen component={Appeal} name="AppealScreen"/>
        <Stack.Screen component={Order} name="OrderScreen"/>
        <Stack.Screen component={Formalization} name="FormalizationScreen"/>
        <Stack.Screen component={Accept} name="AcceptScreen"/>
        <Stack.Screen component={Reject} name="RejectScreen"/>
        <Stack.Screen component={Confirm} name="ConfirmScreen"/>
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})