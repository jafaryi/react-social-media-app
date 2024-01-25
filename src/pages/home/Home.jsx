import TopBar from "../../components/topbar/TopBar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed    from "../../components/feed/Feed.jsx"
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import "./Home.css"
export default function Home() {
    return (
        <>
            <TopBar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>

    )
}