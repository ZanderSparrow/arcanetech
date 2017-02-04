import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import LibraryList from './components/LibraryList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={"login"} component={Login} title={"Who are you?"} />
      <Scene key={"libraryList"} component={LibraryList} title={"Arcane Technologies"} />
    </Router>
  );
};

export default RouterComponent;
