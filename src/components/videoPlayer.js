import React, {Component} from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from '../react_public/stylesheets/video.css';



class VideoPlayer extends Component {
  render() {
    return (
      <div className={styles.component}>
        <header className={styles.header}>
            <h1 className={styles.title}>Lapse</h1>
        </header>
        <ul className={styles.videoList}>
            <li className={styles.videoListItem}>
                <Video
                    autoPlay
                    ref="video1"
                    onPlay={() => {
                        this.refs.video1.videoEl.play();
                    }}>
                    <source type="application/x-mpegurl" src="https://cdn.flowplayer.org/391106/456979.m3u8" />
                    <source type="video/mp4" src="https://cdn.flowplayer.org/391106/456979.mp4" />
                </Video>
            </li>
        </ul>
      </div>
    )
}
}

export default VideoPlayer;