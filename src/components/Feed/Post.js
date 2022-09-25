import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
//import { deepOrange } from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({ displayName, userName, isVerified, timeStamp, text, image, avatar }) {
  return (
    <div className="post">
        <div className="post-avatar">
            <Avatar src={ avatar }>AN</Avatar>
        </div>
        <div className="post-body">
            <div className="post-header">
                <div className="header-text">
                    <h3>{ displayName }{" "}
                        <span className="post-username">
                            { isVerified && <VerifiedIcon className="post-badge" /> } @{ userName }
                        </span>
                    </h3>
                </div>
                <div className="post-description">
                    <p>{ text }</p>
                </div>
                <img src={ image } alt=""></img>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <IosShareIcon fontSize="small" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post