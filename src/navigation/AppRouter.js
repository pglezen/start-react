import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import CredentialDashboard from '../Login/CredentialDashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <br/>
      <Switch>
        <Route path="/Credentials" component={CredentialDashboard} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
