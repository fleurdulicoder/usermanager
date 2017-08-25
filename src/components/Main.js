import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import UserDetail from './UserDetail';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class Main extends Component {
  componentDidMount() {
    let height = window.innerHeight || document.clientHeight || 1050;
    document.querySelector('.app').style.height = height + 'px';
  }

  defaultScreen() {
    return (
      <Card className="user-card appear">
        <CardHeader title="Welcome"></CardHeader>
        <CardText>Load users from the left hand-side panel</CardText>
      </Card>
    );
  }

  render() {
    return (
      <div className="app">
        <AppBar title="User Manager" className="appbar" />
        <UserList />
        <div className="main">
          <Route exact={true} path="/" component={() => (this.defaultScreen())} />
          <Route path="/user/:id" component={UserDetail} />
          <Route exact={true} path="/adduser" component={AddUserForm} />
        </div>
      </div>
    );
  }
}

export default Main;
