import './App.css';
import {useState, useEffect} from 'react'
import {getTokenFromUrl} from '../src/spotify'
import Login from './component/Login'
import Player from './component/Player'
import {useDataLayerValue} from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'

export const spotify = new SpotifyWebApi();

function App() {

  //Pull data from Data layer.
  const [{token}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token){
      
      // Setting token in data layer
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      //Setting access token
      spotify.setAccessToken(_token)

      //Getting user details
      spotify.getMe().then((user) => {
        //Dispatch sends action type and payload to the reducer.
        dispatch({
          type: 'SET_USER',
          user: user

        })
      })

      //Getting user playlists
      spotify.getUserPlaylists().then((playlists) => {
        console.log('Playlists ', playlists)
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })     
    }
  })
  
  return (
    <div className="App">

      {
        token ? (
          <Player 
          spotify = {spotify}/>
        ) :
        (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
