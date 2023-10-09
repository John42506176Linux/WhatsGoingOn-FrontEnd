import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Event } from '../models/event'; // replace './tweet' with the actual path to your tweet.tsx file
import TwitterPreviewView from 'react-native-twitter-preview';

interface Props {
  event: Event;
}

const EventComponent: React.FC<Props> = ({ event }) => {
  return (
    <View>
      <TwitterPreviewView
  url={event.url}
  backgroundColor={'#272A35'}
/>
      <Text onPress={() => Linking.openURL(event.event_link)}>Invite Link :{event.event_link}</Text>
    </View>
  );
};

export default EventComponent;
