import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={stylesHome.text}> HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to components screen"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Screen"
      />
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Screen"
      />
    </View>
  );
};

const stylesHome = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
