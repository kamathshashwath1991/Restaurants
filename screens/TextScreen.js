import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.inputStyle}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My Name is{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 10,
    borderWidth: 10,
  },
});
export default TextScreen;
