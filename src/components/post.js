import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';

class Post extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    console.log('POST component this: ', this)
  }
  
  render(){
    return (
      <h1>Post</h1>
    )
  }
}

export default Post;