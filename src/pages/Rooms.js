import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import RoomInfo from "../components/RoomInfo";

function Rooms(){
    return(
        <div className="Rooms">
            <HeaderLoggedIn />
            <RoomInfo />
            <Footer />
        </div>
    )
}

export default Rooms;