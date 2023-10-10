import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import EventComponentList from './components/eventListComponent';
import EventView from './components/eventViewComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={EventComponentList} />
          <Stack.Screen name="Event Details">
            {(props) => <EventView {...props}/>}
          </Stack.Screen>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default App;
