import React from 'react';
import { useState, useEffect } from 'react';
import './styles/StopWatch.scss';

interface timeInSecondsProps {
    timeInSeconds: number;
  }

  const StopWatch: React.FC<timeInSecondsProps> = (props) => {
    
    const { timeInSeconds } = props;
    const [stopWatchTime, setStopWatchTime] = useState<Array<number | string>>([])

    
    function calculateTime(timeInSeconds: number): Array<number | string> {

        let hours: number= Math.floor(timeInSeconds / 3600);
        let minutes: number= Math.floor((timeInSeconds - (hours * 3600)) / 60);
        let seconds: number= timeInSeconds - (hours * 3600) - (minutes * 60);

        let hoursFormat = hours < 10 ? `0${hours}` : hours;
        let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
        let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

        return [hoursFormat, minutesFormat, secondsFormat]
    }

    useEffect (() => {
        let stopWatchArray: Array<number|string> = calculateTime(timeInSeconds);
        setStopWatchTime(stopWatchArray)
    }, [timeInSeconds])
    

    return(
       <main>
        <section className='stopwatch_container'>
                <span className='stopwatch_time'>{stopWatchTime[0]}</span>
                <span className='stopwatch_time_seperator'>:</span>
                <span className='stopwatch_time'>{stopWatchTime[1]}</span>
                <span className='stopwatch_time_seperator'>:</span>
                <span className='stopwatch_time'>{stopWatchTime[2]}</span>
            </section>
        </main>
    )
}

export default StopWatch