import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">
          <p>Loading...</p>
        </div>
      </div> 
    )
  }
  
  const { title, description } = video.snippet
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}


export default VideoDetail