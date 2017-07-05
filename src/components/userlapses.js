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
                  <span><h3>{lapse.name}<Button onClick={() => {this.props.upVote(lapse.id)}} className="pull-right"><Glyphicon glyph="plus"/></Button><span><p ref= {lapse.id}>{lapse.votes}</p></span><Button className="pull-right"><Glyphicon glyph="minus"/></Button></h3></span>
                  <p>{lapse.description}</p>
                  <p>Taken on <strong>{lapse.date}</strong> in <strong>{lapse.location}</strong></p>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to={`/lapses/${lapse.id}`} className="rhysBtn">Comments/Details</Link>
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
        <h1 className='text-center'>Lapses</h1>
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