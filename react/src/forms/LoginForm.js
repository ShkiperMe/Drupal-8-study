import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Redirect from 'react-router-dom/Redirect';
import cookie from 'react-cookies';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { show} from 'redux-modal';

import { FormErrors } from '../components/FormErrors';
import BootstrapModal from '../components/BootstrapModal';
import LoadingSpinner from '../components/LoadingSpinner';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      formErrors: {},
      loading: false,
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const _self = this;
    _self.setState({
      loading: true,
    });
    event.preventDefault();

    jQuery.ajax({
      url: '/rest/session/token?_format=json',
      type: 'get',
      success: function (data) {
        const expires = new Date(new Date().getTime()+(30*24*60*60*1000));
        cookie.save('X-CSRF-Token', data, { path: '/', expires: expires });
        _self.setState({
          loading: false,
        });
      },
      error: function (data) {
        _self.setState({
          formErrors: {0: data.responseJSON.message},
          loading: false,
        }, this.validateForm);
      }
    });

    jQuery.ajax({
      url: '/oauth/token?_format=json',
      type: 'post',
      data: {
        'grant_type': 'password',
        'client_id': '294824cf-ce49-467a-80b3-43cbe4d7743f',
        'client_secret': 'admin',
        'username': this.state.name,
        'password': this.state.password,
        'scope': 'github',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      dataType: 'json',
      success: function (data) {
        const expires = new Date(new Date().getTime()+(30*24*60*60*1000));
        cookie.save('Bearer', data.access_token, { path: '/', expires: expires });
        _self.props.show('bootstrap', {
          title: 'Welcome',
          message: 'You may create new language now',
          handler: {
            redirectOnHide: '/github-rating/new'
          },
        });
      },
      error: function (data) {
        _self.setState({
          formErrors: {0: data.responseJSON.message},
        }, this.validateForm);
      }
    });

  }

  render() {
    if (cookie.load('Bearer')) {
      return <Redirect to={'/github-rating/new'}/>;
    }
    else {
      return (
        <div className="Login">
          <FormErrors formErrors={this.state.formErrors} />
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
            {this.state.loading ? <LoadingSpinner /> : ''}
          </form>
          <BootstrapModal />
        </div>
      );
    }
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ show }, dispatch)
)(LoginForm)
