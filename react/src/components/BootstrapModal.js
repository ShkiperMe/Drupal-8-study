import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import {history} from '../lib/history';

const onHideHandler = handler => () => {
  if (handler.redirectOnHide) {
    history.push(handler.redirectOnHide);
  }
};

class BootstrapModal extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };

  render() {
    const { show, handleHide, title, message, handler } = this.props;
    console.log(this.props);

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          { message }
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHideHandler(handler)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connectModal({ name: 'bootstrap' })(BootstrapModal)