import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Grid, Row, Col} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';
import {findDOMNode} from 'react-dom'

class ViewLapse extends Component {
  componentDidMount() {
    const {id} = this.props.params;
    console.log('componentDidMount this.props: ', this.props)
    this.props.getLapse(id)
  }
  
  componentWillMount() {
    console.log('componentWillMount this.props.lapse: ', this.props.lapse)
    const {id} = this.props.params
    this.props.getComments(id)
  }
  
  onSubmit(values) {
    values.commenter = this.props.auth.username;
    values.id= this.props.params.id
    console.log('values: ', values)
    this.props.postComment(values);
  }
  
  render() {
    const {lapse, comments, auth, handleSubmit} = this.props
    console.log('this.props after render: ', this.props)
    
    if (!lapse) {
      return <div className="center-text">Loading...</div>
    }
    return (
        <Grid>
          <Row>
            <Col md={4}>
              <img style={{width:"300px"}} src={lapse.pic_1_url} />
            </Col>
            <Col md={4}>
              <img style={{width:"300px"}} src={lapse.pic_2_url} />
            </Col>
            <Col md={4}>
              <img style={{width:"300px"}} src={lapse.pic_3_url} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4}>
              <video style={{width:"300px"}} controls>
                <source type="application/x-mpegurl" src={lapse.playlist_url} />
                <source type="video/mp4" src={lapse.pic_1_url} />
                <source type="video/mp4"
                src={lapse.url2} />
                <source type="video/mp4"
                src={lapse.url3} />
                <source type="video/mp4"
                src={lapse.url4} />
              </video>
            </Col>
            <Col md={8}>
              <div className="well well-lg">
                <div className="row">
                  <p className="text-center"><strong>Comments</strong></p>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <strong>{comments.commenter}: </strong>
                  </div>
                  <div className="col-md-10">
                    <p className="pull-left">{comments.body}</p>
                  </div>
                </div>
                <div className="row">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <fieldset className="form-group">
                      <label>Post a Comment</label>
                      <Field
                        name="body"
                        type="text"
                        component="input"
                        className="form-control" />
                    </fieldset>
                    <button type="submit" className="btn btn-primary">Comment</button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    lapse: state.allLapseData[ownProps.params.id],
    comments: state.comments,
    auth: state.auth
  }
}

ViewLapse = connect(mapStateToProps, actions)(ViewLapse)
ViewLapse = reduxForm({
  form: "postComment",
  fields: "body"
})(ViewLapse);
export default ViewLapse;