import React from 'react';
import './Widgets.css';
//import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets-input'>
          <SearchIcon className='widget-search-icon' />
          <input placeholder="Search Twitter" type="text"></input>
        </div>
        <div className="widgets-container">
          <h2>What's happening</h2>
          {}
        </div>
    </div>
  );
}

export default Widgets