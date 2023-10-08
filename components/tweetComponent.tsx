import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Tweet } from '../models/tweet'; // replace './tweet' with the actual path to your tweet.tsx file
import TwitterPreviewView from 'react-native-twitter-preview';

interface Props {
  tweet: Tweet;
}

const TweetComponent: React.FC<Props> = ({ tweet }) => {
  return (
    <View>
      <TwitterPreviewView
  url={tweet.tweetLink}
  backgroundColor={'#272A35'}
/>
      <Text onPress={() => Linking.openURL(tweet.link)}>Invite Link :{tweet.link}</Text>
    </View>
  );
};

export default TweetComponent;
