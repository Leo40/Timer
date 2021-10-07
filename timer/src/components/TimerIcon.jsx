import React from 'react'

function TimerIcon({type, number, seconds, setSeconds, minutes, setMinutes, flag, setFlag, prevSeconds}) {
        
    const countDown = () => {

        if(type === "seconds") {
            
            setTimeout(start, 1000);         

            var start = () => {
            setInterval(decrease, 1000);
            }            

            var decrease = () => {
                // let innerNumber = seconds;
                if (seconds > 0) {       
                    setFlag(false);             
                    seconds--;
                    setSeconds(seconds);
                    }
                else if (seconds === 0) {
                    // clearTimeout(start);
                    setFlag(true);
                    setSeconds(3);
                }
            }
            start();       
            return prevSeconds;     
        }      
        else if(type === "minutes"){            
            if(flag === true) {
                const updatedMinutes = minutes--;
                setMinutes(updatedMinutes);           
            }                        
            return minutes;                
        }
        else{
            return number;
        }          
    }

    return (
        <div className="timer-icon">            
            {countDown()}                     
        </div>
    )
}

export default TimerIcon
