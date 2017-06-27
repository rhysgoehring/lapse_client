import React, {Component} from 'react';


class VideoDetail extends Component {
  render() {
    return(
      <div>
        <video className="video-player" controls>
          <source type="application/x-mpegurl" src="https://cdn.flowplayer.org/391106/456979.m3u8" />
          <source type="video/mp4" src="https://cdn.flowplayer.org/391106/456979-1080p.mp4" />
          <source type="video/mp4"
          src="https://cdn.flowplayer.org/391106/456979-720p.mp4" />
          <source type="video/mp4"
          src="https://https://cdn.flowplayer.org/391106/456979.mp4" />
          <source type="video/mp4"
          src="https://cdn.flowplayer.org/391106/456979-216p.mp4" />
        </video>
      </div>

    )
  }
}

export default VideoDetail;