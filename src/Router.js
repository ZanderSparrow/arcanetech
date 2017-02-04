import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import LibraryList from './components/LibraryList';
import EntryCreate from './components/EntryCreate';
import EntryDetail from './components/EntryDetail';

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
          onRight={() => Actions.entryCreate()}
          rightTitle={'Add'}
          key={'libraryList'} 
          component={LibraryList} 
          title={"Library"} />
        <Scene key={'entryCreate'} component={EntryCreate} title={'Add to the Library'} />
        <Scene key={'entryDetail'} component={EntryDetail} title={'An Entry'} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
