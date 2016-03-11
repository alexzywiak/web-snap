import React, {Component} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {logOut} from '../action/index';

class NavBar extends Component {

  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/web-snap/messages">
            {this.props.loggedInUser ? 
              this.props.loggedInUser.username
                :
              'WebSnap'
            }
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            { this.props.loggedInUser ?
              <a href="#" onClick={this.props.logOut}>
                Log Out
              </a>  
                :
              <Link to='/web-snap/login'>
                Log In
              </Link>
            }
          </li>
          <li>
            <Link to='/web-snap/messages'>
              Messages
            </Link>
          </li>
          <li>
            <Link to='/web-snap/newmessage'>
              Send a Message
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

const mapStateToProps = ({loggedInUser}) => {
  return {loggedInUser};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);