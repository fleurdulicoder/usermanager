import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isInteger } from 'lodash';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { addUser } from '../actions';

const validate = values => {
  const errors = {};
  const fields = [ 'name', 'role', 'age', 'img', 'bio' ];
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

const createTextField = (
  { input, label, meta: { touched, error }, ...props },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...props}
  />
);

createTextField.propTypes = {
  input: PropTypes.oneOfType([ PropTypes.object ]).isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

createTextField.defaultProps = { label: '' };

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, userId: 1 };
  }

  // static defaultProps = {
  //   userId: 1,
  // };
  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.setState({ redirect: true, userId: nextProps.userId });
    }
  }

  render() {
    const { redirect, userId } = this.state;
    const { handleSubmit } = this.props;

    if (redirect) {
      return <Redirect to={`/user/${userId}`} />;
    }

    return (
      <form
        className="user-add-form appear"
        onSubmit={handleSubmit(this.props.sendUser)}
      >
        <div>
          <Field
            name="name"
            component={createTextField}
            hintText="Enter your full name"
            label="Full Name"
            floatingLabelText="Full Name"
          />
        </div>
        <div>
          <Field
            name="role"
            component={createTextField}
            hintText="What is your role"
            label="Role"
            floatingLabelText="Role"
          />
        </div>
        <div>
          <Field
            name="age"
            component={createTextField}
            hintText="Your age"
            label="Age"
            floatingLabelText="Age"
          />
        </div>
        <div>
          <Field
            name="img"
            component={createTextField}
            hintText="URL to your picture"
            label="Avatar"
            floatingLabelText="Avatar"
          />
        </div>
        <div>
          <Field
            name="bio"
            component={createTextField}
            hintText="Write about you"
            label="Bio"
            floatingLabelText="Bio"
            multiLine
            rows={2}
            rowsMax={4}
          />
        </div>
        <div>
          <RaisedButton
            label="Submit"
            secondary
            onClick={handleSubmit(this.props.sendUser)}
          />
        </div>
      </form>
    );
  }
}

AddUserForm.propTypes = {
  userId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sendUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ userId: state.users.last().get('id') });

const mapDispatchToProps = dispatch => ({
  sendUser(user) {
    dispatch(addUser(user));
    dispatch(reset('AddUserForm'));
  },
});

const AddUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'AddUserForm', validate })(AddUserForm),
);

export default AddUserFormContainer;
