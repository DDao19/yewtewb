import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './App.css'

class App extends React.Component {
  state = { 
    videos: [],
    selectedVideo: null 
  }

  componentDidMount() {
    this.onTermSubmit('porter robinson')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    })
    
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] 
    })
  }

  render() {
    const { videos, selectedVideo } = this.state

    return (
      <div className="ui container">
        <div className="hero">
          <h1>YewTewb</h1>
        </div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App