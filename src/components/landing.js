import React, {Component} from 'react';
import {Link} from 'react-router';
import {Carousel, Jumbotron} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div className="landingBox">
        <Carousel className="landingCorousel" controls={false} indicators={false} interval={2000} wrap={false}>
          <Carousel.Item index={1} >
            <video className="landingVideo" autoPlay poster="https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may204pm0375.jpg">
              <source type="application/x-mpegurl" src='https://cdn.flowplayer.org/391106/457906.m3u8' />
              <source type="video/mp4" src="https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may204pm0000.jpg" />
              <source type="video/mp4"
              src="https://cdn.flowplayer.org/391106/457906-720p.mp4" />
              <source type="video/mp4"
              src="https://cdn.flowplayer.org/391106/457906.mp4" />
              <source type="video/mp4"
              src="https://cdn.flowplayer.org/391106/457906-216p.mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item index={2} direction={null} animateIn={false}>
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