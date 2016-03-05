import React, {Component} from 'react';

class NewMessageForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      message: '', 
      recipient: '', 
      sender:this.props.loggedInUser.username, 
      filepath: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(stateProp, value){
    const obj = {};
    obj[stateProp] = value;
    this.setState(obj);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.handleSubmit(this.state);
  }

  renderUsers(){
    return this.props.users
      .filter( user => user.username !== this.props.loggedInUser.username)
      .map( user => {
      return (
        <button
        className={this.state.recipient === user.username ? 'list-group-item active' : 'list-group-item'}
        onClick={() => this.setState({recipient: user.username})} 
        key={user.username}>
          <h5 className="list-group-item-heading">{user.username}</h5>
          <p className="list-group-item-text">{user.email}</p>
        </button>
      );
    });
  }

  render(){

    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          
          <h4>Recipient: {this.state.recipient ? this.state.recipient : 'Pick someone to send this to!'}</h4>
          
          <div className="list-group">
            {this.renderUsers()}
          </div>
          
          <form onSubmit={this.handleSubmit}> 
            <div className="form-group">
              <label>Message</label>
              <input 
                className="form-control"
                value = { this.state.message }
                onChange = { evt => this.onInputChange('message', evt.target.value) }/>
            </div>
             <div className="form-group">
               <label>Image Upload</label>
               <input 
                className="form-control"
                type='file'
                onChange = { evt => this.onInputChange('filepath', evt.target.files ) }/>
              </div>
            <input 
            className="btn btn-primary btn-block"
            type="submit" 
            value="Send"/>
          </form>
        </div>
      </div>
    );
  }
}

export default NewMessageForm;