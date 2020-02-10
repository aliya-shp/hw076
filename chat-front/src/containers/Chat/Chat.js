import React, {Component} from 'react';
import {connect} from "react-redux";

import {createMessage, fetchMessages, updateMessage, updateAuthor} from "../../store/actions";
import AppTitle from "../../components/AppTitle/AppTitle";
import MessageForm from "../../components/MessageForm/MessageForm";
import ListOfMessages from "../../components/ListOfMessages/ListOfMessages";

class Chat extends Component {
    componentDidMount() {
        this.props.fetchMessages();
        this.interval = setInterval(this.props.fetchMessages, 2000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    updateMessage = (message) => {
        this.props.updateMessage(message);
    };

    updateAuthor = (author) => {
        this.props.updateAuthor(author);
    };

    sendMessage = () => {
        this.props.createMessage(this.props.message);
    };

    render() {
        return (
            <div className="container container-fluid text-center">
                <AppTitle/>
                <MessageForm message={this.props.message.message}
                             author={this.props.message.author}
                             sendMessage={()=>this.sendMessage()}
                             changeMessage={(e)=>this.updateMessage(e.target.value)}
                             changeAuthor={(e)=>this.updateAuthor(e.target.value)}/>
                <ListOfMessages messages={this.props.messages}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message,
        messages: state.messages,
        error: state.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createMessage: (message) => dispatch(createMessage(message)),
        fetchMessages: () => dispatch(fetchMessages()),
        updateMessage: (message) => dispatch(updateMessage(message)),
        updateAuthor: (author) => dispatch(updateAuthor(author))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);