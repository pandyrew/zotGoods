import Navbar from "../Navbar"
import Back from "../back"
import TopNav from "../topnav"

export default function Page () {
    return (
        <div className="w-screen h-screen absolute flex">
            <div className="w-[15%]">
                <Navbar></Navbar>
            </div>
            <div className="w-[85%] h-full left-2">
                <TopNav></TopNav>
            </div>
        </div>
    )
}


