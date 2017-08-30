import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { removeUser } from '../actions';

class UserDetail extends Component {
  getUser() {
    return this.props.users.find(
      user => user.get('id') === parseInt(this.props.match.params.id, 10),
    );
  }

  render() {
    const displayUser = this.getUser();
    console.log(displayUser);

    if (!this.props.match.params.id || !displayUser) {
      return (
        <Card className="user-card appear">
          <CardHeader title="Welcome" />
          <CardText>Load users from the left hand-side panel</CardText>
        </Card>
      );
    }

    return (
      <Card className="user-card appear">
        <CardHeader
          title={displayUser.get('name')}
          subtitle={`${displayUser.get('role')} @ OrionHealth`}
          avatar={`${displayUser.get('img')}`}
        />
        <CardText>
          {displayUser.get('bio')}
        </CardText>
        <Divider />
        <CardActions>
          <FlatButton
            className="user-add-button"
            label="Remove User"
            secondary
            onClick={() => this.props.deleteUser(displayUser.get('id'))}
          />
        </CardActions>
      </Card>
    );
  }
}

UserDetail.propTypes = {
  users: ImmutablePropTypes.list.isRequired,
  match: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

// user: state.activeUser
const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  deleteUser: userId => {
    dispatch(removeUser(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
