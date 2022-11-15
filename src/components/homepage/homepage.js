import React from "react"
import "./homepage.css"

const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            <h1>Hello my Profile</h1>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
    )
}

export default Homepage