import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import LibraryList from './components/LibraryList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key={'auth'}>
        <Scene key={'welcome'} component={Welcome} title={"Arcane Technologies"} />
        <Scene key={'login'} component={Login} title={"Who are you?"} />
        <Scene key={'signup'} component={Signup} title={"Who are you?"} />
      </Scene>
      <Scene key={'main'} title={"Arcane Technologies"}>
        <Scene 
          onRight={() => console.log('right!')}
          rightTitle={'Add'}
          key={'libraryList'} 
          component={LibraryList} 
          title={"Library"} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
