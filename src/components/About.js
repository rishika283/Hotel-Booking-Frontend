import React from "react";
import bg_main from './photos/bg-main-page.jpg';


function About(){
    return(
        <div className="About">
            <img src={bg_main} className="about-bg"></img>
            <div className="p-5 about-text">
                <p className="lead">Nestled in the serene embrace of the Indian Himalayas, Rish Hotels offers a tranquil retreat for those seeking a perfect blend of rustic charm and modern comfort. Each cottage, thoughtfully designed to reflect the local architecture, features wooden interiors, cozy fireplaces, and large windows that offer breathtaking views of the surrounding mountains and lush forests.</p>
                <p className="lead">Guests can enjoy the crisp, clean mountain air from their private balconies or take leisurely walks through the beautifully landscaped gardens. The cottages are equipped with modern amenities such as Wi-Fi, plush bedding, and well-appointed bathrooms to ensure a comfortable stay.</p>
                <p className="lead">Our on-site restaurant serves a variety of local and international cuisines, prepared with fresh, locally sourced ingredients. For those looking to unwind, our wellness center offers yoga sessions and traditional Ayurvedic treatments.</p>
                <p className="lead">Adventure enthusiasts can partake in guided treks, nature walks, and bird watching tours organized by the hotel. In the evenings, guests can gather around a bonfire under the starlit sky, sharing stories and enjoying the peaceful ambiance.</p>
                <p className="lead">With its picturesque setting, warm hospitality, and a range of activities, our cottage-type hotel in the mountains is the perfect destination for a memorable getaway.</p>
            </div>
        </div>
    )
}

export default About;