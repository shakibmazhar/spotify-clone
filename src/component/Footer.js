import React from 'react'
import '../component style/Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import {Grid, Slider} from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { useDataLayerValue } from '../DataLayer'
import SpotifyPlayer from 'react-spotify-web-playback'

const Footer = () => {
    const [{ now_playing, token }, dispatch] = useDataLayerValue()
    
    //console.log(token)
    
    return (
        <div className = 'footer'>

            {/* Song info */}
            <div className = 'footer-left'> 
                {now_playing && <img className = 'footer-albumArt' 
                src = {now_playing?.album.images[0].url}
                alt = '' />}
                <div className = 'footer-songInfo'>
                    <h4>{now_playing?.name}</h4>
                    <p>{now_playing?.artists.map((artist) => artist.name).join(', ')}</p>
                </div>
            </div>

            {/* Player Control */}
            <div className = 'footer-center'>
                <ShuffleIcon 
                className = 'footer-green'/>
                <SkipPreviousIcon 
                className = 'footer-icon'/>
                <PlayCircleOutlineIcon 
                fontSize = 'large' 
                className = 'footer-icon'/>
                <SkipNextIcon 
                className = 'footer-icon'/>
                <RepeatIcon 
                className = 'footer-green' />
            </div>

            {/* Player functionality for premium users */}
            {/* <div className = 'footer-center'>
               {now_playing && <SpotifyPlayer
                token = {token}
                uris = {now_playing.uri ? [now_playing.uri] : [] }
                 />}
            </div> */}

            {/* volume Control */}
            <div className = 'footer-right'>
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
