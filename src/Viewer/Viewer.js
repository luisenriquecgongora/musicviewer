import React, {useEffect} from 'react';
import Album from '../Album/Album';
import getData from '../Helpers/getData';
import {useSelector, useDispatch} from 'react-redux';
import {setSongsByAlbums, setAlbumsKeys, openAllAlbum, closeAllAlbum} from '../redux-helper/actions/index';
import './Viewer.scss';
const _ = require('lodash');

const Viewer = ()=>{
  let songsByAlbums = useSelector(state => state.songsByAlbums);
  let albumsKeys = useSelector(state => state.albumsKeys);
  let allClosed = useSelector(state => state.allClosed);
  const dispatch = useDispatch();

  useEffect(()=>{
    ((async ()=>{
      let newSongsByAlbums = await getData();
      let newAlbumsKeys = _.keys(newSongsByAlbums);
      dispatch(setSongsByAlbums(newSongsByAlbums));
      dispatch(setAlbumsKeys(newAlbumsKeys));
    })());
  },[dispatch])

  const toggleAllAlbums = ()=>{
    if(allClosed){
      dispatch(openAllAlbum());
    }else{
      dispatch(closeAllAlbum());
    }
  }

  return (
    <div id="Viewer-Container">
      <h1>Albums <button onClick={toggleAllAlbums}>{allClosed ? '+': '-'}</button> </h1>
      {albumsKeys.map((albumKey,idx)=>{
        return(<Album key={idx} songs={songsByAlbums[albumKey]} name={albumKey}></Album>)
      })}
    </div>
  );
}

export default Viewer;
