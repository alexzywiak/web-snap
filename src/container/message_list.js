import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import {authorize} from '../auth';
import {getUserMessageList, getUser, getUserSession} from '../action/index';

class MessageList extends Component{

  componentWillMount(){
    authorize(this.props, '/login')
      .then( () => {
        this.props.getUserMessageList(this.props.loggedInUser.username);
      });
  }

  renderMessages(){
    return this.props.messages.map( msg => {
      return (
        <div key={msg.objectId}>
          <Link to={`/message/${msg.objectId}`}>
            <h3>{msg.sender}</h3>
            <p>{msg.message}</p>
          </Link>
        </div>
      );
    });
  }

  render(){
    return (
      <ul>
        {this.renderMessages()}
      </ul>
    );
  }
}

const mapStateToProps = ({messages, loggedInUser}) => {
  return {messages, loggedInUser};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUserMessageList, getUser, getUserSession}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);