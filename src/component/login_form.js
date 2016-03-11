import React, {Component} from 'react';
import {Link} from 'react-router';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {username: '', password: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(stateProp, value){
    let obj = {};
    obj[stateProp] = value;
    this.setState(obj);
  }

  onSubmit(evt){
    evt.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h3>{this.props.title}</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input 
              className="form-control"
              type="text"
              value = {this.state.username}
              onChange={evt => this.onInputChange('username', evt.target.value)}/>
              
              { this.props.action === 'signUp' ? (
                <span>
                  <label>Email</label>
                  <input 
                  className="form-control"
                  type="text"
                  value = {this.state.email}
                  onChange={evt => this.onInputChange('email', evt.target.value)}/>
                </span>
              ): null }
              
              <label>Password</label>
              <input 
              className="form-control"
              type="password"
              value = {this.state.password}
              onChange={evt => this.onInputChange('password', evt.target.value)}/>
              <hr/>
              <div className="row">
                <div className="col-md-2 col-md-offset-6">{
                    this.props.action === 'signUp' ?
                    <Link to="/web-snap/login">Log In</Link> :
                    <Link to="/web-snap/signup">Sign Up</Link> 
                  }
                </div>
                <div className="col-md-4">
                  <button 
                  className="btn btn-primary btn-block"
                  type="submit">{this.props.title}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;