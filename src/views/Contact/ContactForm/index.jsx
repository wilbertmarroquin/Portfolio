import React, { Component } from 'react';
import {
  Container, Form, Row, Col, Button,
} from 'react-bootstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeField = this.onChangeField.bind(this);

    this.state = {
      name: undefined,
      email: undefined,
      subject: undefined,
      message: undefined,
    };
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    event.stopPropagation();
  }

  onChangeField(event, fieldName) {
    const tempField = {};
    tempField[fieldName] = event.target.value;
    this.setState(tempField);
  }

  render() {
    const yourEmailText = 'Your e-mail';
    const yourNameText = 'Your name';
    const subjectText = 'Subject';
    const messageText = 'Message';
    const sendMessageText = 'Send Message';

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                required
                type="text"
                placeholder={yourNameText}
                onChange={(e) => { this.onChangeField(e, 'name'); }}
              />
            </Col>
            <Col>
              <Form.Control
                required
                type="email"
                placeholder={yourEmailText}
                onChange={(e) => { this.onChangeField(e, 'email'); }}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Control
                required
                type="text"
                placeholder={subjectText}
                onChange={(e) => { this.onChangeField(e, 'subject'); }}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Control
                required
                as="textarea"
                rows="5"
                placeholder={messageText}
                onChange={(e) => { this.onChangeField(e, 'message'); }}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Button variant="primary" type="submit">
                { sendMessageText }
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
