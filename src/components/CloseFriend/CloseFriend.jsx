import "./CloseFriend.css"
import {UserImg} from "../../dummyData"

export default function CloseFriend({user}) {
    console.log(UserImg[0].profilePicture);
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture?user.profilePicture:UserImg[0].profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}