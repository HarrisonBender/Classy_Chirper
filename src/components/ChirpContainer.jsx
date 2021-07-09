
import React from 'react'

const ChirpContainer = props => {
    return (
        <div class="card" style={{  width: "18rem", marginTop:"1rem" }}>
            <div class="card-body">
                <h5 class="card-title">{props.chirp.username}</h5>
                <p class="card-text">{props.chirp.message}</p>
                <p class="card-text">{props.chirp.date}</p>
            </div>
        </div>
    )
}

export default ChirpContainer;
