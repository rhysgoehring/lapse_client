import React, {Component} from 'react';
import {Link} from 'react-router';
import {Carousel, Jumbotron} from 'react-bootstrap';

class Landing extends Component {
    constructor(){
      super();
        this.state = {
          index: 0
        }
    }
  render() {
    return (
      <div className="landingBox">
        <Carousel className="landingCorousel" activeIndex={this.state.index} controls={false} indicators={false} wrap={false}>
          <Carousel.Item index={0}>
            <video ref='introVid' autoPlay className="landingVideo" onEnded={()=> this.setState({index: 1})}>
              <source type="application/x-mpegurl" src="https://cdn.flowplayer.org/391106/471991.m3u8" />
              <source type="video/mp4" src="https://cdn.flowplayer.org/391106/471991-1080p.mp4" />
              <source type="video/mp4"
              src="https://cdn.flowplayer.org/391106/471991-720p.mp4" />
              <source type="video/mp4"
              src="https://cdn.flowplayer.org/391106/471991.mp4" />
              <source type="video/mp4"
              src="https://cdn.flowplayer.org/391106/471991-216p.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item index={1} direction='null'>
            <Jumbotron className="landingJumbo">
              <br />
              <br />
              <br />
              <h1 className="lapseLogo text-center">L A P S E</h1>
              <br />
              <br />
              <p className="landingP text-center">Create, upload and share your time lapse videos</p>
              <p className="landingP text-center">and learn how to improve your own process through</p>
              <p className="landingP text-center">feedback from the community</p>
              <div className="container">
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <Link className="rhysBtn pull-right" to="/signin">Sign In</Link>
                  </div>
                  <div className="col-md-6">
                    <Link className="rhysBtn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Landing;