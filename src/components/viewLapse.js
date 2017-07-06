import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Grid, Row, Col} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';
import _ from 'lodash';

class ViewLapse extends Component {
  componentWillMount() {
    const {id} = this.props.params;
    this.props.getLapse(id)
  }
  
  componentDidMount() {
    const {id} = this.props.params
    this.props.getComments(id)
  }
  
  onSubmit(values) {
    values.commenter = this.props.auth.username;
    values.id= this.props.params.id
    console.log('values: ', values)
    this.props.postComment(values);
    const {id} = this.props.params
    this.props.getComments(id);
    
  }
  
  renderComments() {
    return _.map(this.props.comments, comment => {
      return (
      <div className="row" key={comment.id}>
        <div className="col-md-2">
          <strong>{comment.commenter}: </strong>
        </div>
        <div className="col-md-10">
          <p className="pull-left">{comment.body}</p>
        </div>
      </div>
      )
    })
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
          <hr />
          <Row>
            <Col md={5}>
              <video style={{width:"450px", marginTop:'1.7em'}} poster={lapse.pic_2_url} controls>
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
            <Col md={7}>
              <div className="well well-lg" style={{
                backgroundColor: '#222629',
                border: '1px solid #61892f',
                display: 'inlineBlock',
                color: '#86C232',
                fontFamily: 'Ubuntu',
                aligContent: 'center',
                margin: '1em 1em'
             }}>
                <div className="row">
                  <p className="text-center lapseLogo"><strong>Comments</strong></p>
                </div>
                <div className="row">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <fieldset className="form-group">
                      <div className="col-md-9">
                        <label className='rhysLbl'>Post a Comment</label>
                        <Field
                          name="body"
                          type="text"
                          component="textarea"
                          className="form-control rhysField" />
                      </div>
                      <div className="col-md-3">
                        <button type="submit" className=" postCommentBtn rhysBtn">Comment</button>
                      </div>
                    </fieldset>
                  </form>
                </div>
                {this.renderComments()}
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