import './Profile.css'
import TopBar from "../../components/topbar/TopBar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

// import { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router'
// import axios from 'axios'
// import { AuthContext } from '../../context/AuthContext'
// import { Add, Remove } from '@material-ui/icons'
// import { Button } from '@material-ui/core'

export default function Profile() {
    return(
        <>
            <TopBar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                                <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                                <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}