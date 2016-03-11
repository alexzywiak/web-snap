import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import {authorize} from '../auth';
import {getUserMessageList, getUser, getUserSession} from '../action/index';

import MessageListView from '../component/message_list_view';

class MessageList extends Component{

  componentWillMount(){
    authorize(this.props, '/web-snap/login')
      .then( () => {
        if(this.props.loggedInUser){
          this.props.getUserMessageList(this.props.loggedInUser.username);
        }
      });
  }

  render(){
    return (
      <MessageListView messages={this.props.messages} />
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