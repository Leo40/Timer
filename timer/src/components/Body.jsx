import React from 'react'
import TimerIcon from './TimerIcon'

function Body() {
    return (
        <div className="timer-body">
            WE'RE LAUNCHING SOON
            <div className="icon-container">
                <TimerIcon number={"08"}/>
                <TimerIcon />
                <TimerIcon />
                <TimerIcon />
            </div>
        </div>
    )
}

export default Body