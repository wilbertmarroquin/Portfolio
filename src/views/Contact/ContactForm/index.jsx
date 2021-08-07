import React, { Component } from 'react';
import {
  Container, Form, Row, Col, Button,
} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './styles.scss';

const successMessage = 'Message sended successfully, I will contact you soon';
const errorMessage = 'Something was wrong, please contact me directly to "wilbertmarroquin1996@gmail.com"';
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeField = this.onChangeField.bind(this);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      responseSuccessMessage: undefined,
    };
  }

  onChangeField(event, fieldName) {
    const tempField = {};
    tempField[fieldName] = event.target.value;
    this.setState(tempField);
  }

  handleSubmit(event) {
    const { loading } = this.state;
    if (!loading) {
      this.setState({ loading: true });
      event.preventDefault();
      event.stopPropagation();
      emailjs.sendForm(
        process.env.REACT_APP_EMAIL_KEY, process.env.REACT_APP_EMAIL_TEMPLATE,
        event.target, process.env.REACT_APP_EMAIL_USER,
      ).then(() => {
        this.setState({
          loading: false,
          responseSuccessMessage: true,
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }).catch(() => {
        this.setState({ loading: false, responseSuccessMessage: false });
      });
    }
  }

  render() {
    const yourEmailText = 'Your e-mail';
    const yourNameText = 'Your name';
    const subjectText = 'Subject';
    const messageText = 'Message';
    const sendMessageText = 'Send Message';
    const {
      loading, responseSuccessMessage, name, email, subject, message,
    } = this.state;
    const hasMessage = typeof responseSuccessMessage !== 'undefined';

    return (
      <Container className="contact-form">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                required
                type="text"
                value={name}
                name="from_name"
                placeholder={yourNameText}
                onChange={(e) => { this.onChangeField(e, 'name'); }}
              />
            </Col>
            <Col>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
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
                value={subject}
                placeholder={subjectText}
                name="subject"
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
                name="message"
                placeholder={messageText}
                value={message}
                onChange={(e) => { this.onChangeField(e, 'message'); }}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Button variant="primary" type="submit" disabled={loading}>
                {loading
                && (
                  <div className="spinner-border spinner-border-sm mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                {sendMessageText}
              </Button>
            </Col>
            {!loading && hasMessage
            && (
            <Col className={responseSuccessMessage ? 'success-message' : 'error-message'}>
              {responseSuccessMessage ? successMessage : errorMessage}
            </Col>
            )}
          </Row>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
