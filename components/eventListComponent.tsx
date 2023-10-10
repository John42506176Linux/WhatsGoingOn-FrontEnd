import React, { useEffect } from 'react';
import { FlatList, View, Text, Button, ActivityIndicator,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions/eventActions';
import EventComponent from '../components/eventComponent';
import { Event } from '../models/event';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  "Event Details": { event: Event };
  // add other screens here
};
type EventDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Event Details'>;

interface Props {
  navigation: EventDetailsScreenNavigationProp;
  loading: boolean;
  data: any;
  error: string | null;
  fetchEvent: () => void;
}

const EventComponentList: React.FC<Props> = ({ navigation, loading, data, error, fetchEvent }) => {
  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  const handleEventPress = (event: Event) => {
    navigation.navigate('Event Details', {
       event });
  };

  if (loading) {
    return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );
  }
  if (error) {
    return (
    <View style={styles.container}>
        <Button title="Fetch New Tweets" onPress={fetchEvent} />
        <Text>Error: {error}</Text>
    </View>
    );
  }
  return (
    <View style={styles.top_container}>
      <Text style={{...styles.header, textAlign: 'center'}}>Tech Events happening in San Francisco</Text>
      <View style={styles.buttonContainer}>
        <Button title="Reload Tweets" onPress={fetchEvent} />
      </View>
      <Text style={styles.header}>Tweets</Text>
      <FlatList
      data={data}
      renderItem={({ item }) => {
        if (item.is_in_state) {
          return <EventComponent event={item} onPress={() => handleEventPress(item)} />;
        } else {
          return null;
        }
      }}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    top_container: {
      flex: 1,
      paddingTop: 50,
    },
    header : {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
  });

const mapStateToProps = (state: any) => {
  return ({
    data: state.events.data,
    loading: state.events.loading,
    error: state.events.error,
  });
}

const mapDispatchToProps = {
  fetchEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventComponentList);
