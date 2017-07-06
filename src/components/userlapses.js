import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/index';
import {Button, Glyphicon} from 'react-bootstrap';

class UserLapses extends Component {
  componentDidMount() {
    const {id} = this.props.params
    this.props.getUserLapses(id)
  }
  
  renderUserLapses() {
    return _.map(this.props.usersLapses, lapse => {
      return (
            <div className="col-md-4 lapseWell" key={lapse.id}>
              <div>
                <video className="userLapsePlayer" controls>
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
                  <span><h3 className='postTitle'>{lapse.name}</h3></span>
                  <p style={{color:'#FF652F', fontFamily:'Ubuntu'
                  }}>{lapse.description}</p>
                  <p style={{color:'#FF652F', fontFamily:'Ubuntu'}}>Taken on <strong style={{color:'#FF652F', fontFamily:'Ubuntu'}}>{lapse.date}</strong> in <strong>{lapse.location}</strong></p>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to={`/lapses/${lapse.id}`} className="rhysBtn">Comments & Pictures</Link>
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
      <div className='container'>
        <h1 className='text-center lapseLogo'>Lapses</h1>
       {this.renderUserLapses()}
      </div>
     
    )
  }

}

function mapStateToProps(state){
  return {
    usersLapses: state.userLapses
  }
  
}

UserLapses = connect(mapStateToProps, actions)(UserLapses)

export default UserLapses