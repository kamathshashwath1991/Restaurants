import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../assets/forest.jpg')}
        score="Image score - 9"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../assets/beach.jpg')}
        score="Image score - 7"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../assets/mountain.jpg')}
        score="Image score - 4"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
