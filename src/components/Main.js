import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import UserDetail from './UserDetail';
import UserList from './UserList';
import AddUserForm from './AddUserForm';

class Main extends Component {
  componentDidMount() {
    const height = window.innerHeight || document.clientHeight || 1050;
    document.querySelector('.app').style.height = `${height}px`;
  }

  defaultScreen() {
    return (
      <Card className="user-card appear">
        <CardHeader title="Welcome" />
        <CardText>
          Click on links on the left hand side to load user details
        </CardText>
      </Card>
    );
  }

  render() {
    return (
      <div className="app">
        <AppBar title="User Manager" className="appbar" />
        <UserList />
        <div className="main">
          <Route exact path="/" component={this.defaultScreen} />
          <Route path="/user/:id" component={UserDetail} />
          <Route exact path="/adduser" component={AddUserForm} />
        </div>
      </div>
    );
  }
}

export default Main;
