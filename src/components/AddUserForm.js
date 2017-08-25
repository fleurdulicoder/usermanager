import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import { isInteger } from 'lodash';

// Add Redirect on Submit to the created User
// https://github.com/reactjs/react-router-redux

const validate = values => {
  const errors = {};
  const fields = ["name", "role", "age", "img", "bio"];
  fields.forEach(field => {
    if (!values[field]) {
        errors[field] = 'This field is required';
    }
  });

  if (values.age && !isInteger(Number(values.age))) {
      errors.age = 'Age is only a number';
  }

  if (values.img && !/^http(s){0,1}:\/\//.test(values.img)) {
    errors.img = 'URL is required';
  }
  return errors;
};

const createTextField = ({ input, label, meta: { touched, error }, ...custom  }) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />


class AddUserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
        <form className="user-add-form appear" onSubmit={handleSubmit(this.props.sendUser)}>
          <div>
            <Field name="name"
              component={createTextField}
              hintText="Enter your full name"
              label="Full Name"
              floatingLabelText="Full Name"
            />
          </div>
          <div>
            <Field name="role"
              component={createTextField}
              hintText="What is your role"
              label="Role"
              floatingLabelText="Role"
            />
          </div>
          <div>
            <Field name="age"
              component={createTextField}
              hintText="Your age"
              label="Age"
              floatingLabelText="Age"
            />
          </div>
          <div>
            <Field name="img"
              component={createTextField}
              hintText="URL to your picture"
              label="Avatar"
              floatingLabelText="Avatar"
            />
          </div>
          <div>
            <Field name="bio"
              component={createTextField}
              hintText="Write about you"
              label="Bio"
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

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'AddUserForm',
  validate
})(AddUserForm));
