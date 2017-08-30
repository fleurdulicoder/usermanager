import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { removeUser } from '../actions';

class UserDetail extends Component {
  // state = { swap: false };
  getUser() {
    return this.props.users.find(
      user => user.get('id') === parseInt(this.props.match.params.id, 10),
    );
  }

  // componentDidMount() {
  //   console.log('mounted');
  // }
  //
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.match.params.id !== this.props.match.params.id;
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.id !== nextProps.match.params.id) {
  //     this.setState({ swap: false });
  //     this.setState({ swap: true });
  //   }
  // }
  //
  // componentDidUpdate() {
  // }
  render() {
    const displayUser = this.getUser();

    if (!this.props.match.params.id || !displayUser) {
      return (
        <Card className="user-card appear">
          <CardHeader title="Welcome" />
          <CardText>Load users from the left hand-side panel</CardText>
        </Card>
      );
    }

    // {`user-card ${this.state.swap ? 'switcher' : ''}`}
    return (
      <Card className="user-card appear">
        <CardHeader
          title={displayUser.get('name')}
          subtitle={
            `${displayUser.get('role')} @ ${displayUser.get('company')}`
          }
          avatar={`${displayUser.get('img')}`}
        />
        <CardText>
          <List>
            <ListItem primaryText={displayUser.get('phone')} />
            <ListItem primaryText={displayUser.get('email')} />
            <ListItem primaryText={displayUser.get('website')} />
            <ListItem primaryText={displayUser.get('bio')} />
          </List>
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

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  deleteUser: userId => {
    dispatch(removeUser(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
