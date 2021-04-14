import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import '../component style/Player.css'

const Player = ({spotify}) => {
    return (
        <div className = 'player'>
            <div className = 'player-body'>
                <Sidebar spotify = {spotify}/>
                <Body spotify = {spotify}/>
                <Footer />
            </div>
        </div>
    )
}

export default Player
