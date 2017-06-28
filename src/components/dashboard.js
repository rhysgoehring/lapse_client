import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';
import {Modal } from 'react-bootstrap';


class Dashboard extends Component {
  
  componentDidMount() {
    console.log('$$$this.props', this.props)
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
              <h3>{lapse.name}</h3>
              <p>{lapse.description}</p>
              <p>Taken on <strong>{lapse.date}</strong> in <strong>{lapse.location}</strong></p>
              <div className="row">
                <div className="col-md-6">
                  <Link className="btn btn-primary" to={`/lapses/${lapse.id}`}>View This Lapse</Link>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary">All User's Lapses</button>
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
        {/* <VideoDetail /> */}
        <h1 className="text-center">Lapses</h1>
        <hr />
        {this.renderLapses()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {lapses: state.allLapseData }
}

export default connect(mapStateToProps, actions)(Dashboard);