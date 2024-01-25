import "./Sidebar.css"
import {
    RssFeed,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    Bookmark,
    Group,
    PlayCircleFilledOutlined,
    Chat,
    PlayCircle
} from '@mui/icons-material';
import {Users} from "../../dummyData"
import CloseFriend from "../CloseFriend/CloseFriend.jsx";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Help</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Work</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarLstItemText">School</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarLstItemText">Music</span>
                    </li>
                </ul>
                <button className="sidebarButton">
                    Show more
                </button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u)=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar