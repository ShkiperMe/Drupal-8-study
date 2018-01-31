import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Redirect from 'react-router-dom/Redirect';
import createHistory from 'history/createBrowserHistory';
import cookie from 'react-cookies';
import axios from 'axios';

export default class NewLanguageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  validateForm() {
    return this.state.name.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const payload = {
      'vid': [
        {
          "target_id": "language",
          "target_type": "taxonomy_vocabulary",
        }
      ],
      'name': [
        {
          'value': this.state.name
        }
      ]
    };

    axios.post('/taxonomy/term?_format=json', payload, {
      headers: {
        'Authorization': 'Bearer ' + cookie.load('Bearer'),
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          const history = createHistory();
          history.replace('/github-rating');
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    if (!cookie.load('Bearer')) {
      return <Redirect to={'/github-rating/login'}/>;
    }
    else {
      return (
        <div className="new-language-form">
          <p className="text-header">{'Add language'}</p>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name" bsSize="large">
              <ControlLabel>Language</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Save language
            </Button>
          </form>
        </div>
      );
    }
  }
}