import React from 'react';
import './Song.scss';

const Song = (props) => {
  return (
    <li>{props.song.song}</li>
  );
}

export default Song;
