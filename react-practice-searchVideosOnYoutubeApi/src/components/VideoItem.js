import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect }) => {
    const title = video.snippet.title
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
        <img alt={title} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">
          {title}
          </div>
        </div>
      
    </div>
  )
};

export default VideoItem;
