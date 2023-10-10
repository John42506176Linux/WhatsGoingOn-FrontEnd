
import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  source: string;
}

const CustomImageComponent: React.FC<Props> = ({ source }) => {
  let image;
  switch(source) {
    case 'Twitter':
      image = require('../assets/twitter.png');
      break;
    // Add more cases as needed
    default:
      image = require('../assets/default.png');
  }
  return <Image source={image} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});

export default CustomImageComponent;
