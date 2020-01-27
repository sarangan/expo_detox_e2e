import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Home(){

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

    return (
    <View style={styles.container}>
      <Text>mora bora</Text>
      <TextInput
       style={{ height: 40,  width: 200 }}
          placeholder="text1"
          value={text1}
          onChangeText={(text)=>setText1(text.toString())}
        />
        <TextInput
         style={{ height: 40, width: 200 }}
          placeholder="text2"
          value={text2}
          onChangeText={(text)=>setText2(text.toString())}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
});