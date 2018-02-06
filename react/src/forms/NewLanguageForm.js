import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Modal } from 'react-bootstrap';
import Redirect from 'react-router-dom/Redirect';
import cookie from 'react-cookies';
import {show} from 'redux-modal';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { FormErrors } from '../components/FormErrors';
import BootstrapModal from '../components/BootstrapModal';
import LoadingSpinner from '../components/LoadingSpinner';

class NewLanguageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      formErrors: {},
      loading: false,
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
    const _self = this;
    _self.setState({
      loading: true,
    });
    event.preventDefault();

    const payload = {
      "vid": [
        {
          "target_id": "language",
          "target_type": "taxonomy_vocabulary",
        }
      ],
      "name": [
        {
          "value": this.state.name
        }
      ]
    };

    jQuery.ajax({
      url: '/taxonomy/term?_format=json',
      type: 'post',
      data: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('Bearer'),
        'X-CSRF-Token': cookie.load('X-CSRF-Token'),
      },
      dataType: 'json',
      success: function (data) {
        if (data.tid) {
          _self.props.show('bootstrap', {
            title: 'New language was created',
            message: data.name[0].value,
            handler: {
              redirectOnHide: '/github-rating'
            },
          });
          _self.setState({
            loading: false,
          });
        }
      },
      error: function (data) {
        _self.setState({
          formErrors: {0: data.responseJSON.message},
          loading: false,
        }, this.validateForm);
      }
    });

  }

  render() {
    if (!cookie.load('Bearer')) {
      return <Redirect to={'/github-rating/login'}/>;
    }
    else {
      return (
        <div className="new-language-form">
          <FormErrors formErrors={this.state.formErrors} />
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
)(NewLanguageForm)