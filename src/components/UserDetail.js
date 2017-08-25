import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { removeUser } from '../actions';

class UserDetail extends Component {
  getUser() {
    return this.props.users.find((user) => user.get("id") === this.props.match.params.id);
  }

  render() {
    let displayUser = this.getUser();

    if (!this.props.match.params.id || !displayUser) {
      return (
        <Card className="user-card appear">
          <CardHeader title="Welcome"></CardHeader>
          <CardText>Load users from the left hand-side panel</CardText>
        </Card>
      );
    }

    return (
      <Card className="user-card appear">
        <CardHeader
          title={displayUser.get("name")}
          subtitle={`${displayUser.get("role")} @ OrionHealth`}
          avatar={`${displayUser.get("img")}`}
        />
        <CardText>
          {displayUser.get("bio")}
        </CardText>
        <Divider />
        <CardActions>
          <FlatButton
            className="user-add-button"
            label="Remove User"
            secondary={true}
            onClick={() => this.props.deleteUser(displayUser.get('id'))}
          />
        </CardActions>
      </Card>
    );
  }
}

// user: state.activeUser
const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  deleteUser: (userId) => {
    dispatch(removeUser(userId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
