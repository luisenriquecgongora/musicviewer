import { CLOSE_ALBUM, OPEN_ALBUM, CLOSE_ALL_ALBUMS, OPEN_ALL_ALBUMS, SET_SONGS_BY_ALBUMS, SET_ALBUMS_KEYS} from "../constants/action-types";

export function setSongsByAlbums(payload) {
  return { type: SET_SONGS_BY_ALBUMS, payload };
}

export function setAlbumsKeys(payload) {
  return { type: SET_ALBUMS_KEYS, payload };
}

export function closeAlbum(payload) {
  return { type: CLOSE_ALBUM, payload };
}

export function openAlbum(payload) {
  return { type: OPEN_ALBUM, payload };
}

export function closeAllAlbum(payload) {
  return { type: CLOSE_ALL_ALBUMS, payload };
}

export function openAllAlbum(payload) {
  return { type: OPEN_ALL_ALBUMS, payload };
}
