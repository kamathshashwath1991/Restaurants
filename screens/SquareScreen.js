import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SquareDetail from '../Components/SquareDetail';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(red);
  console.log(blue);
  console.log(green);
  return (
    <View>
      <SquareDetail
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        title="Red"
      />
      <SquareDetail
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        title="Blue"
      />
      <SquareDetail
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        title="Green"
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
