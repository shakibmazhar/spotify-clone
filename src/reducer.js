export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token: 'BQBHNU-IMXWLiSvBc8kwIZ9zoG-dg0AwrnUDXUhJs7w1LX0BUkkY5CibGjgyEoFaOtgoXddfc0rwa5jtXUWLk7sWtJQx9P5NpBC1xRVTyp_FwPXhhkRx5vF9Drvm9J775O1WijrDYmpsnDiBTt7Dt1EdUo3IuFBJsBPCxoEHJoWRujuP'
}

const reducer = (state, action) => {

    // Action => type, [payload]
    switch(action.type){
        case 'SET_USER':                    //Action type
            return{
                ...state,                   //keep current state
                user: action.user           //Put payload in user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists 
            }
        case 'SET_CURRENT_PLAYLIST':
            return{
                ...state,
                current_playlist: action.current_playlist
            }        
        case 'SET_NOW_PLAYING':
            return{
                ...state,
                now_playing: action.now_playing
            }
        default:
            return state;
    }
}

export default reducer