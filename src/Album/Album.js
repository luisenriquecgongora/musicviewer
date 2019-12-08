import React from 'react';
import Song from '../Song/Song';
import {useSelector, useDispatch} from 'react-redux';
import {closeAlbum, openAlbum} from '../redux-helper/actions/index';
import './Album.scss';

const Album = (props) => {
  const album = useSelector(state => state.songsByAlbums[props.name]);
  const opened = useSelector(state => state.songsByAlbums[props.name].opened);
  const dispatch = useDispatch();

  const toggleAlbumOpened = () => {
    if(album.opened){
      dispatch(closeAlbum(props.name));
    }else{
      dispatch(openAlbum(props.name));
    }
  }

  return (
    <React.Fragment>
      <h2>{props.name}
        <button onClick={toggleAlbumOpened}>{album.opened ? ("-"):("+")}</button>
      </h2>
      {opened &&
        <ul>
          {props.songs.map((song,idx)=>{
            return (
              <Song key={idx} song={song} >
              </Song>
            )
          })}
        </ul>
      }
    </React.Fragment>
  );
}

export default Album;
