import axios from 'axios'

const KEY = "AIzaSyDYN3YdMuvDwibVh8Tl15TQzL45X9piiLE"



export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})