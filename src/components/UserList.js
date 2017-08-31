import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class UserList extends Component {
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

UserList.propTypes = { users: ImmutablePropTypes.list.isRequired };

const mapStateToProps = state => ({ users: state.users });
export default connect(mapStateToProps)(UserList);
