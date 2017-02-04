import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
};

export default App;
