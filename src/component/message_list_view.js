import React, {Component} from 'react';
import {Link} from 'react-router';

class MessageListView extends Component {
  renderMessages(){
    return this.props.messages.map( msg => {
      return (
        <Link
        className="list-group-item"
        key={msg.objectId}
        to={`/message/${msg.objectId}`}>
          <h4 className="list-group-item-heading">{msg.sender}</h4>
          <p className="list-group-item-text">{msg.message}</p>
        </Link>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Chat Messages</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="list-group">
              { (this.props.messages.length) ?

                this.renderMessages() :

                  <Link 
                  className="list-group-item"
                  to="/newmessage">
                    <h4 className="list-group-item-heading">No Messages!</h4>
                    <p className="list-group-item-text">Send a Message Instead</p>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MessageListView;