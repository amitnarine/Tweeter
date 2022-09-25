import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon className='twitter-icon' />

        {/* Sidebar Option */}
        <SidebarOption active Icon={ HomeIcon } text="Home" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ TagIcon }text="Explore" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ NotificationsNoneIcon } text="Notifications" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ MailOutlineIcon } text="Messages" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ BookmarkBorderIcon } text="Bookmarks" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ ListIcon } text="Lists" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ PermIdentityIcon } text="Profile" />
        {/* Sidebar Option */}
        <SidebarOption Icon={ MoreHorizIcon }text="More" />

        {/* Tweet button */}
        <Button variant="contained" className="tweet-button" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar