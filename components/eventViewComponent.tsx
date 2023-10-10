
import React from 'react';
import { View, Button, Linking, StyleSheet} from 'react-native';
import TwitterPreview from 'react-native-twitter-preview';
import { FAB } from '@rneui/themed';

const EventView = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start' }}>
      </View>
      <FAB
        style={styles.floatingButton}
        title="RSVP"
        upperCase
        color="purple"
        icon={{ name: 'event', color: '#fff' }}
        onPress={() => Linking.openURL(event.event_link)}
      />
      <TwitterPreview
        style =  {{ top: 20 ,flexGrow: 1, width: '100%', height: '100%' }}
        url={event.url}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingButton: {
        top: 10,
    },
});
export default EventView;
