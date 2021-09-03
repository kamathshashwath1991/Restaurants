import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Text>Current Count : {counter}</Text>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
