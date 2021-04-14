import '../component style/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import React from 'react'
import { useDataLayerValue } from '../DataLayer'

const Sidebar = ({spotify}) => {
    const [{playlists}, dispatch] = useDataLayerValue()

    //Playlist click handler
    function handleClick(id){
        spotify.getPlaylist(id).then((response) => {
            console.log('Response ', response)
            dispatch({
              type: 'SET_CURRENT_PLAYLIST',
              current_playlist: response
            })
          })
    }


    return (
        <div className = 'sidebar'>
         <img className = 'sidebar-logo'
         src = 'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
         alt = 'Spotify Logo' />
         <SidebarOption 
         option = 'Home'
         Icon = {HomeIcon}/>
         <SidebarOption 
         option = 'Search'
         Icon = {SearchIcon}/>
         <SidebarOption 
         option = 'Your Library'
         Icon = {LibraryMusicIcon}/>

         <br/>
         <strong className = 'sidebar-title'>PLAYLISTS</strong>
         <hr/>
        
         {playlists?.items?.map(playlist => (
             <div 
             className = 'playList'
             onClick = {() => {handleClick(playlist.id)}}>
                <SidebarOption 
                option = {playlist.name} />
             </div>
         ))}

        </div>
    )
}

export default Sidebar
