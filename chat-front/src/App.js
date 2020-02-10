import React from 'react';
import {Route, Switch} from "react-router-dom";

import AppTitle from './components/AppTitle/AppTitle';
import Chat from './containers/Chat/Chat';
import MessageForm from './components/MessageForm/MessageForm';

const App = () => (
    <Switch>
      <Route path="/messages" exact component={AppTitle}/>
      <Route path="/messages" exact component={Chat}/>
      <Route path="/messages" exact component={MessageForm}/>
    </Switch>
);

export default App;