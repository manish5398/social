import './sidebar.css'
import {Bookmark, HelpOutline, PlayCircleFilled, RssFeed, School, WorkOutline, Event, Group, Chat} from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarlistitemText">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <Chat className='sidebarIcon' />
            <span className="sidebarlistitemText">Chat</span>
          </li>
          <li className="sidebarlistitem">
            <PlayCircleFilled className='sidebarIcon' />
            <span className="sidebarlistitemText">Videos</span>
          </li>
          <li className="sidebarlistitem">
            <Group className='sidebarIcon' />
            <span className="sidebarlistitemText">Groups</span>
          </li>
          <li className="sidebarlistitem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarlistitemText">Bookmarks</span>
          </li>
          <li className="sidebarlistitem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarlistitemText">Questions</span>
          </li>
          <li className="sidebarlistitem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarlistitemText">Jobs</span>
          </li>
          <li className="sidebarlistitem">
            <Event className='sidebarIcon' />
            <span className="sidebarlistitemText">Event</span>
          </li>
          <li className="sidebarlistitem">
            <School className='sidebarIcon' />
            <span className="sidebarlistitemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarbtn">Show More</button>
        <hr className='sidebarhr' />
        <ul className="sidebarfriendList">
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
      </div>
  )
}
