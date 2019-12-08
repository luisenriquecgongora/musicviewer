import { CLOSE_ALBUM, OPEN_ALBUM, CLOSE_ALL_ALBUMS, OPEN_ALL_ALBUMS, SET_SONGS_BY_ALBUMS, SET_ALBUMS_KEYS} from "../constants/action-types";
const _ = require('lodash');

let songsByAlbums = {};
let albumsKeys = [];

const initialState = {
  songsByAlbums: songsByAlbums,
  albumsKeys: albumsKeys,
  allClosed: true,
  albumsClosed: 0
};

function rootReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case CLOSE_ALBUM:
      let albumToClose = action.payload;
      newState.songsByAlbums[albumToClose].opened = false;
      newState.albumsClosed++;
      if(newState.albumsClosed === newState.albumsKeys.length){
        newState.allClosed = true;
      }
      return newState
    case OPEN_ALBUM:
      let albumToOpen = action.payload;
      newState.songsByAlbums[albumToOpen].opened = true;
      newState.allClosed = false;
      newState.albumsClosed--;
      return newState
    case CLOSE_ALL_ALBUMS:
      newState.allClosed = true;
      newState.albumsClosed = newState.albumsKeys.length;
      newState.songsByAlbums = _.forEach(newState.songsByAlbums, (value, key)=>{
        value.opened = false;
        return value;
      })
      return newState
    case OPEN_ALL_ALBUMS:
      newState.allClosed = false;
      newState.albumsClosed = 0;
      newState.songsByAlbums = _.forEach(newState.songsByAlbums, (value, key)=>{
        value.opened = true
        return value;
      })
      return newState
    case SET_SONGS_BY_ALBUMS:
      let songsByAlbums = action.payload;
      newState.songsByAlbums = songsByAlbums;
      return newState
    case SET_ALBUMS_KEYS:
      let albumsKeys = action.payload;
      newState.albumsKeys = albumsKeys;
      newState.albumsClosed =  albumsKeys.length;
      return newState
    default:
      return state;
  }
}

export default rootReducer;
