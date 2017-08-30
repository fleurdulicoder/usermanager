import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions';

// https://api.myjson.com/bins/d4sf1
class UserList extends Component {
  componentWillMount() {
    fetch('https://api.myjson.com/bins/11azkt')
      .then(response => response.json())
      .then(users => {
        this.props.loadUsers(users.users);
      })
      .catch(error => new Error(error));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.length !== this.props.users.length) {
      this.setState({ users: nextProps.users });
    }
  }

  createListItems() {
    return this.props.users.map(user => (
      <Link
        className="user-menu-link"
        key={user.get('id')}
        to={`/user/${user.get('id')}`}
      >
        <MenuItem primaryText={user.get('name')} />
      </Link>
    ));
  }

  render() {
    return (
      <Paper className="nav">
        <Menu>
          <Link to="/adduser">
            <RaisedButton
              className="user-add-button"
              label="Add User"
              secondary
            />
          </Link>
          <Divider />
          {this.createListItems()}
        </Menu>
      </Paper>
    );
  }
}

UserList.propTypes = {
  users: ImmutablePropTypes.list.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadUsers: users => {
    dispatch(getUsers(users));
  },
});

const mapStateToProps = state => ({ users: state.users });

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
