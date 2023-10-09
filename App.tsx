import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import EventComponentList from './components/eventListComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <EventComponentList />
    </Provider>
  );
};

export default App;
