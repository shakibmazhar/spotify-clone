import clientid from './clientID'

//Handle auth by Spotify
export const authEndpoint = 'https://accounts.spotify.com/authorize'

//Redirect to this app after auth

//const redirectUri = 'http://localhost:3000/'

const redirectUri = 'https://spotify-clone-93986.web.app/'

const clientID = clientid

//Permissions
const scopes = [
    "streaming",
    "user-read-email",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-read-private",
    "playlist-read-collaborative",
    "playlist-read-private",
    "user-modify-playback-state"
]

// Pulling access token from url
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
} 

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;