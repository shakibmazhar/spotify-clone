import React from 'react'
import '../component style/Body.css'
import { useDataLayerValue } from '../DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

const Body = ({spotify}) => {

    const [{ current_playlist }, dispatch] = useDataLayerValue()
    
    //Track click handler
    function handleClick(track){
        console.log(track)
        dispatch({
            type: 'SET_NOW_PLAYING',
            now_playing: track
        })
    }   

    return (
        <div className = 'body'>
            <Header spotify = {spotify} />

            <div className = 'body-info'>
                <img 
                src = {current_playlist?.images[0].url}
                alt = '' />
                <div className = 'body-infoText'>
                    <strong>{current_playlist?.type.toUpperCase()}</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p>{current_playlist?.description}</p>
                </div>
            </div>

            <div className = 'body-songs'>
                <div className = 'body-icons'>
                    {current_playlist && <PlayCircleFilledIcon className = 'body-shuffleIcon'/>}
                    {current_playlist && <FavoriteIcon fontSize = 'large'/>}
                    {current_playlist && <MoreHorizIcon />}
                </div>
                {current_playlist?.tracks.items.map((item) => (
                    <div 
                    className= 'songRow-div'
                    onClick = {() => {
                        handleClick(item.track)
                    }}>
                    <SongRow track = {item.track} />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Body
