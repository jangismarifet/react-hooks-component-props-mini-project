import React from "react";



function About({ image, about }) {    
    return (
        <aside>
            {
            image === undefined
            ?  <img src="https://via.placeholder.com/215" alt="blog logo" />
            :  <img src={image} alt="blog logo" />
            }
            <p>{about}</p>
        </aside>
    )
}

export default About;