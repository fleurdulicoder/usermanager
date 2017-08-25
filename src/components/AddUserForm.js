import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class AddUserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
        <form className="user-add-form appear" onSubmit={handleSubmit(this.props.sendUser)}>
          <div>
            <Field name="name"
              component={TextField}
              hintText="Enter your first and last names"
              floatingLabelText="Full Name"
            />
          </div>
          <div>
            <Field name="role"
              component={TextField}
              hintText="Profession"
              floatingLabelText="Role"
            />
          </div>
          <div>
            <Field name="age"
              component={TextField}
              hintText="Your age"
              floatingLabelText="Age"
            />
          </div>
          <div>
            <Field name="img"
              component={TextField}
              hintText="URL to your picture"
              floatingLabelText="Avatar"
            />
          </div>
          <div>
            <Field name="bio"
              component={TextField}
              hintText="Write about you"
              floatingLabelText="Bio"
              multiLine={true}
              rows={2}
              rowsMax={4}
            />
           </div>
           <div>
             <RaisedButton
               label="Submit"
               secondary={true}
               onClick={handleSubmit(this.props.sendUser)}
             />
           </div>
        </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendUser(user) {
    dispatch(addUser(user));
  }
});

//export default reduxForm({ form: 'adduser'})(connect(null, mapDispatchToProps)(AddUserForm));

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'AddUserForm' })(AddUserForm));
