import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';


class Dashboard extends Component {
  
  componentDidMount() {
    this.props.getAllLapses();
  }
  
  renderLapses() {
    return _.map(this.props.lapses, lapse => {
      console.log('lapse after map: ', lapse)
      return (
        <div className="col-md-4" key={lapse.id}>
          <div className="thumbnail">
            <img src={lapse.pic_2_url} alt={lapse.pic_2_desc} />
            <div className="caption">
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
    console.log('$$$$____this.props.lapses: ', this.props.lapses)
    
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