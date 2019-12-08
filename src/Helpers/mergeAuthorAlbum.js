const mergeAuthorAlbum = async (data) =>{
  let newSongs = await data.map((song)=>{
    song.album_artist = `${song.band} - ${song.album} `
    return song
  })
  return newSongs;
}

export default mergeAuthorAlbum;
