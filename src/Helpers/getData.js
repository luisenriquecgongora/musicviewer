import mergeAuthorAlbum from './mergeAuthorAlbum';
const _ = require('lodash');

const getData = async ()=>{
  let response = await fetch('/data.json');
  let myJson = await response.json();
  let songs = await mergeAuthorAlbum(myJson);
  let groupedByAlbums = _.groupBy(songs, 'album_artist');
  groupedByAlbums = _.forEach(groupedByAlbums, (value, key)=>{
    value.opened = false
    return value;
  })
  return groupedByAlbums;
}

export default getData;
