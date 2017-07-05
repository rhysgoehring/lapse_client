import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';
import {Button, Glyphicon, Modal} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';


class Dashboard extends Component {
  componentWillMount() {
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
              <span><h3>{lapse.name}<Button onClick={() => {this.props.upVote(lapse.id)}} className="pull-right"><Glyphicon glyph="plus"/></Button><span>{lapse.votes}</span><Button className="pull-right"><Glyphicon glyph="minus"/></Button></h3></span>
              <p>{lapse.description}</p>
              <p>Taken on <strong>{lapse.date}</strong> in <strong>{lapse.location}</strong></p>
              <div className="row">
                <div className="col-md-6">
                  <Link to={`/lapses/${lapse.id}`} className="btn btn-primary">View Comments</Link>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary pull-right">All User's Lapses</button>
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
        <h1 className="text-center">Dashboard</h1>
        <hr />
        {this.renderLapses()}
        {/* <Post /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lapses: state.allLapseData
  }
}


Dashboard = connect(mapStateToProps, actions)(Dashboard)
Dashboard = reduxForm({
  form: "postComment",
  fields: "comment"
})(Dashboard);

export default Dashboard;