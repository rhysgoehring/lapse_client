import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';
import {Button, Glyphicon, Modal} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';


class Dashboard extends Component {
  constructor(props) {
  super(props);
  this.state = {
    showModal: false,
    comment: ''
  }
}
  openModal() {
    this.setState({showModal: true, comment: ''})
  }
  
  closeModal() {
    this.setState({showModal: false})
  }
  
  componentDidMount() {
    
    this.props.getAllLapses();
  }
  
 
   
  renderLapses() {
    return _.map(this.props.lapses, lapse => {
      return (
        <div className="col-md-6" key={lapse.id}>
          <div>
            <video className="video-player " controls>
              <source type="application/x-mpegurl" src={lapse.playlist_url} />
              <source type="video/mp4" src={lapse.url1} />
              <source type="video/mp4"
              src={lapse.url2} />
              <source type="video/mp4"
              src={lapse.url3} />
              <source type="video/mp4"
              src={lapse.url4} />
            </video>
            <div>
              <span><h3>{lapse.name}<Button className="pull-right"><Glyphicon glyph="plus"/></Button><Button className="pull-right"><Glyphicon glyph="minus"/></Button></h3></span>
              <p>{lapse.description}</p>
              <p>Taken on <strong>{lapse.date}</strong> in <strong>{lapse.location}</strong></p>
              <div className="row">
                <div className="col-md-6">
                  <button onClick={this.openModal.bind(this)} className="btn btn-success">Comments</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary pull-right">All User's Lapses</button>
                </div>
              </div>
            <Modal show={this.state.showModal} onHide={this.state.closeModal}>
              <Modal.Header closeButton >
                <Modal.Title>Comments</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="well well-lg">
                  // TODO: Create action and reducer for posting comments
                </div>
                <form>
                  <fieldset className="form-group">
                    <label>Enter Comment: </label>
                    <Field
                      name="comment"
                      type="text"
                      component="input"
                      className="form-control" />
                  </fieldset>
                  <Button>Post</Button>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeModal.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
            </div>
          </div>
        </div>
      )
    })
  }
  
  
  render() {
    return (
      <div className="container">
        {/* <VideoDetail /> */}
        <h1 className="text-center">Dashboard</h1>
        <hr />
        {this.renderLapses()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {lapses: state.allLapseData }
}


Dashboard = connect(mapStateToProps, actions)(Dashboard)
Dashboard = reduxForm({
  form: "comment",
  fields: "comment"
})(Dashboard);

export default Dashboard;