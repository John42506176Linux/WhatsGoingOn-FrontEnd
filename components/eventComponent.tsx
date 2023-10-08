import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { FlatList, View, Text, Button, ActivityIndicator,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions/eventActions';
import TweetComponent from '../components/tweetComponent';

interface Props {
  loading: boolean;
  data: any;
  error: string | null;
  fetchEvent: () => void;
}


const EventComponent: React.FC<Props> = ({ loading, data, error, fetchEvent }) => {
  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  const loadingSelector = useAppSelector(state => state.events);

  if (loading) {
    console.log("Loading");
    return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );
  }
  if (error) {
    console.log("Error");
    return (
    <View style={styles.container}>
        <Text>Error: {error}</Text>
    </View>
    );
  }
  return (
    <View style={styles.top_container}>
      <Button title="Fetch Tweets" onPress={fetchEvent} />
      <Text style={styles.header}>Tweets</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => <TweetComponent tweet={item} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);
