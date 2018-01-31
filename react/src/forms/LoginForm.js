import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import createHistory from 'history/createBrowserHistory';
import cookie from 'react-cookies';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
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
    event.preventDefault();

    jQuery.ajax({
      url: '/oauth/token?_format=json',
      type: 'post',
      data: {
        'grant_type': 'password',
        'client_id': '3155a01e-2b78-42df-98ad-09ec7e4f4aea',
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
        const history = createHistory();
        history.replace('/github-rating/new');
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
          </form>
        </div>
      );
    }
  }
}