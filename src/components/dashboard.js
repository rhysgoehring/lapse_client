import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';
import {Button, Glyphicon, Modal} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';


class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllLapses();
  }
  

  renderLapses() {
    return _.map(this.props.lapses, lapse => {
      return (
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12" key={lapse.id}>
              <div className="postBox">
                <video className="video-player embed-responsive-item" controls>
                  <source type="application/x-mpegurl" src={lapse.playlist_url} />
                  <source type="video/mp4" src={lapse.url1} />
                  <source type="video/mp4"
                  src={lapse.url2} />
                  <source type="video/mp4"
                  src={lapse.url3} />
                  <source type="video/mp4"
                  src={lapse.url4} />
                </video>
          <div className="row">
            <div className='col-md-8'>
              <h2 className="postTitle"><strong>{lapse.name}</strong></h2>
            </div>
            <div className='col-md-4'>
              <h4 className="postUser"><strong>{lapse.username}</strong></h4>
            </div>
          </div>
          <div className="row">
            <p className="postDesc">{lapse.description}</p>
          <div className='row'>
            <p className="text-center">Taken on <strong>{lapse.date}</strong> in <strong>{lapse.location}</strong></p>
          </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Link to={`/lapses/${lapse.id}`} className="rhysBtn postBtn">Comments/Details</Link>
            </div>
            <div className="col-md-6">
              <Link to={`/users/${lapse.user_id}/lapses`} className="rhysBtn postBtn">View All Their Lapses</Link>
            </div>
        </div>
    </div>
  </div>
</div>
</div>
        
        
      )
    })
  }
  
  
  render() {
    return (
      <div className="container">
       <h1 className="lapseLogo text-center">Gallery</h1>
        <hr style={{backgroundColor:'#FF652F'}}/>
        {this.renderLapses()}
        {/* <Post /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lapses: state.allLapseData,
    auth: state.auth
  }
}


Dashboard = connect(mapStateToProps, actions)(Dashboard)
Dashboard = reduxForm({
  form: "postComment",
  fields: "comment"
})(Dashboard);

export default Dashboard;