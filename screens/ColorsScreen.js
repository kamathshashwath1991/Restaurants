import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => setColor([...colors, generateRandomColor()])}
      />
      <FlatList
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: generateRandomColor(),
              }}
            />
          );
        }}
      />
    </View>
  );
};

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
