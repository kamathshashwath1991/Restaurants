import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const SquareDetail = ({title, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button onPress={() => onIncrease()} title={`More ${title}`} />
      <Button onPress={() => onDecrease()} title={`Less ${title}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default SquareDetail;
