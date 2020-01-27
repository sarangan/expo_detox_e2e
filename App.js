import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/Home';
import NewMessageForm from './NewMessageForm';

export default function App() {
  return (
    <View>
       <Text>git</Text>
       <NewMessageForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});