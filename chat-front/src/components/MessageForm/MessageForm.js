import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MessageForm extends Component {
    render() {
        return (
            <div>
                <Form className="form-inline d-flex justify-content-center mt-5 mb-5">
                    <FormGroup>
                        <Label for="message-txt">Enter message:</Label>
                        <Input type="textarea" name="message-txt" value={this.props.message} id="message-txt" onChange={this.props.updateMessage} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message-txt">Enter author mame:</Label>
                        <Input value={this.props.author} type="text" id="message-author" onChange={this.props.updateAuthor} />
                    </FormGroup>
                    <FormGroup>
                        <Button type="button" id="send-message" onClick={this.props.sendMessage}>Send</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default MessageForm;