import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsers } from '../action/index';

class NewMessage extends Component{

  componentWillMount(){
    this.props.getUsers();
  }

  render(){
    return (
      <div>{this.props.users.length}</div>
    );
  }
}

const mapStateToProps = ({users}) => {
  return {users}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUsers}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);