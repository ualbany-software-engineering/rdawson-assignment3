import React from "react"

function Home() {
    return (

        <div className="home">
            <div>
                <img
                    className="photo"
                    src="https://rdawson.s3.amazonaws.com/image0.jpg"
                    alt="Photo"
                ></img>
            </div>
            <div className="content">
            <h1 className="head">
                Ryan Dawson
            </h1>
            <p className="bio">
                My name is Ryan Dawson and I am a Computer Science major. This is my biography.
                I am interested in learning about all things coding. I currently work for a small company
                that specilizes in programing. I am learning a lot there and I am glad to have
                and experience like this.
            </p>
            </div>
        </div>
    )
}

export default Home