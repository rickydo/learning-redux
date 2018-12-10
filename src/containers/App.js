import React from 'react';
import './App.css';
import SideBar from '../components/Sidebar';
import Main from './Main';
import store from '../store';
import _ from 'lodash';

const App = () => {
  const {contacts} = store.getState();

  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} />
      <Main />
    </div>
  )
}

export default App;
