import React, {Component} from 'react';
import drive from 'flowplayer-drive';
import * as actions from './flowPlayerActions';
import {connect} from 'react-redux';

class UploadVideo extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    console.log('this.props in UploadVideo', this.props)
    this.props.flowPlayerLogin();
  }
  render() {
    return (
      <h1 className='center-text'>FlowPlayer Upload</h1>
    )
  }
}

UploadVideo = connect(null, actions)(UploadVideo);

export default UploadVideo;