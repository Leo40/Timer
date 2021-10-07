import React from 'react'
import TimerIcon from './TimerIcon'

function Body({prevSeconds, seconds, setSeconds, minutes, setMinutes, flag, setFlag}) {
    return (
        <div className="timer-body">
            WE'RE LAUNCHING SOON
            <div className="icon-container">
                <TimerIcon type={"days"} number={"08"}/>
                <TimerIcon type={"hours"} number={"24"}/>
                <TimerIcon type={"minutes"} number={"60"} minutes={minutes} setMinutes={setMinutes} flag={flag} setFlag={setFlag} prevSeconds={prevSeconds}/>
                <TimerIcon type={"seconds"} number={"60"} seconds={seconds} setSeconds={setSeconds} flag={flag} setFlag={setFlag} prevSeconds={prevSeconds}/>
            </div>
        </div>
    )
}

export default Body