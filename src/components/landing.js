import React, {Component} from 'react';
import {Link} from 'react-router';
import {Carousel, Jumbotron} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#000"}}>
        <Carousel style={{alignContent: "center", height: 'fillParent', position:'fixed', width:'100%'}} controls={false} indicators={false} interval={20000} wrap={false}>
          <Carousel.Item index={1} >
            <video style={{width:"100%", height:"100%" }} autoPlay poster="https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may204pm0375.jpg">
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
          <Carousel.Item index={2} direction={null} animateIn='false'>
            <Jumbotron className="landingJumbo" style={{width:"100%", height:"1000px", backgroundColor:"black"}}>
              <br />
              <br />
              <br />
              <h1 className="logo text-center" style={{backgroundColor:"black", color:"#fff"}}>L A P S E</h1>
              <br />
              <br />
              <p className="landingP text-center">Create, upload and share your time lapse videos</p>
              <p className="landingP text-center">and learn how to improve your own process through</p>
              <p className="landingP text-center">feedback from the community</p>
              <div className="container">
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <Link className="btn btn-success pull-right" to="/signin">Sign In</Link>
                  </div>
                  <div className="col-md-6">
                    <Link className="btn btn-primary" to="/signup">Sign Up</Link>
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