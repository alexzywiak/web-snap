import React, {Component} from 'react';
import {Link} from 'react-router';

class MessageView extends Component {
  render(){
    
    if(!this.props.message){
      return (<div></div>);
    }

    const {sender, message, imageUrl, filepath} = this.props.message;
    return (
      <div className="row">
        <div className="col-md-12">
          <Link to="/messages">Back To Messages</Link>
        </div>
        <div className="col-sm-12">
          <div className="thumbnail">
            <img className="img-rounded" src={imageUrl} alt={filepath}/>
          </div>
          <div className="caption">
            <h3>{sender}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default MessageView;