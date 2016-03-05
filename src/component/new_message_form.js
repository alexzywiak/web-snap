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
        <li
          onClick={() => this.setState({recipient: user.username})} 
          key={user.username}>
          <div>{user.username}</div>
          <div>{user.email}</div>
        </li>
      );
    });
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <ul>{this.renderUsers()}</ul>
        <h4>Recipient: {this.state.recipient}</h4>
        <form onSubmit={this.handleSubmit}> 
          <input 
           value = { this.state.message }
           onChange = { evt => this.onInputChange('message', evt.target.value) }/>
           <input 
           type='file'
           value = { this.state.filepath }
           onChange = { evt => this.onInputChange('filepath', evt.target.value ) }/>
           <input type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}

export default NewMessageForm;