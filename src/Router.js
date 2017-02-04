import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import LibraryList from './components/LibraryList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={'auth'}>
        <Scene key={'login'} component={Login} title={"Who are you?"} />
      </Scene>
      <Scene key={'main'} title={"Arcane Technologies"}>
        <Scene key={'libraryList'} component={LibraryList} title={"Library"} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
