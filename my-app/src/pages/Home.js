import React from "react"

function Home() {
    return (

        <div className="home">
            <div>
                <img
                    className="photo"
                    src="logo512.png"
                    alt="Photo"
                ></img>
            </div>
            <div className="content">
            <h1 className="head">
                Ryan Dawson
            </h1>
            <p className="bio">
                My name is Ryan Dawson and I am a Computer Science major. This is my biography
            </p>
            </div>
        </div>
    )
}

export default Home