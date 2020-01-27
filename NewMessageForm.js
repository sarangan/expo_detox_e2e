import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';

export default class NewMessageForm extends Component {
  render() {
    return (
      <View>
         <Text>mora bora</Text>
        <TextInput
          testID="messageText"
        />
        <Button
          title="Send"
          testID="sendButton"
       />
      </View>
    );
  }
}