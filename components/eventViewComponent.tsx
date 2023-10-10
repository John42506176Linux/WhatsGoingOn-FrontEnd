import React from 'react';
import { View, Button } from 'react-native';
import TwitterPreviewView from 'react-native-twitter-preview';

const EventView = ({ route }) => {
  const { event } = route.params;

  return (
    <View>
      <View style={{ alignSelf: 'flex-start' }}>
      </View>
      <TwitterPreviewView url={event.url} />
    </View>
  );
};

export default EventView;
