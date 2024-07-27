import small_cottage from './photos/small-cottage.jpg';
import family_cottage from './photos/family-cottage.jpg';
import premium_cottage from './photos/premium-cottage.jpg';

const RoomInfo = () =>{
    /*
    const history = useNavigate();

    const handleBooking = () => {
        history.push('/booking');
    };
    */


    return(
        <div className='RoomInfo'>
            <div className="containerRooms">
                <div className="row py-5">
                    <div className="col-12 rooms-heading">
                        <h2>Rooms</h2>
                    </div>
                </div>
                <div className="row no-gutter">
                    <div className="col-4 px-2">
                        <div className="card card-room">
                        <img className="card-img-top" src={small_cottage} alt="Small Cottage" />
                        <div className="card-body">
                            <h3 className="card-title">Small Cottage</h3>
                            <p className="card-text">
                            A small private cottage with a kitchen.
                            </p>
                            <a href="#" className="btn book-btn">Book</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <div className="card card-room">
                        <img className="card-img-top" src={family_cottage} alt="Family Cottage" />
                        <div className="card-body">
                            <h3 className="card-title">Family Cottage</h3>
                            <p className="card-text">
                            A cottage with two bedrooms and a kitchen.
                            </p>
                            <a href="#" className="btn book-btn">Book</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <div className="card card-room">
                        <img className="card-img-top" src={premium_cottage} alt="Premium Cottage" />
                        <div className="card-body">
                            <h3 className="card-title">Premium Cottage</h3>
                            <p className="card-text">
                            A cottage with 4 bedrooms, living room and kitchen.
                            </p>
                            <a href="#" className="btn book-btn">Book</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo;