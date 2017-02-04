import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import Login from './components/Login';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="Arcane Technologies" />
        <Login />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
