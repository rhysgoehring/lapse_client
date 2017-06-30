import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Grid, Row, Col} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';

class ViewLapse extends Component {
  componentDidMount() {
    const {id} = this.props.params;
    this.props.getLapse(id)
    this.props.getComments(id)
  }
  
  renderComments() {
    
  }
  
  render() {
    const {lapse, comment} = this.props
    console.log('this.props: ', this.props)
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
                    <strong>{comment.commenter}: </strong>
                  </div>
                  <div className="col-md-10">
                    <p className="pull-left">{comment.body}</p>
                  </div>
                </div>
                <div className="row">
                  <form>
                    <fieldset className="form-group">
                      <label>Post a Comment</label>
                      <Field
                        name="comment"
                        type="text"
                        component="input"
                        className="form-control" />
                    </fieldset>
                    <button action="submit" className="btn btn-primary">Comment</button>
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
    comment: state.comments
  }
}

ViewLapse = connect(mapStateToProps, actions)(ViewLapse)
ViewLapse = reduxForm({
  form: "postComment",
  fields: "comment"
})(ViewLapse);
export default ViewLapse;