import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import EventComponent from './components/eventComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <EventComponent />
    </Provider>
  );
};

export default App;
