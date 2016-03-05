import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sendFlashMessage} from '../action/index';

class FlashMessage extends Component{

  constructor(props){
    super(props);

    this.state = {interval: null};
  }

  componentWillMount(){
    setInterval(() => {
      this.props.sendFlashMessage();
      this.setState({interval: null});
    }, 5000);
  }

  render(){
    const {message, className} = this.props.flashMessage;
    if(!message){
      return null;
    }

    return (
      <div className="row">
        <div 
        className={'col-md-12 alert ' + className} 
        role="alert">
          {message}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({flashMessage}) => {
  return {flashMessage};
};

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({sendFlashMessage}, dispatch);
};

export default connect(mapStateToProps, mapStateToDispatch)(FlashMessage);