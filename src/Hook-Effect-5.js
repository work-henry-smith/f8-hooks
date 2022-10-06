import {useState, useEffect} from 'react';

const Timer = () => {
    const [countdown, setCountdown] = useState(180);
    useEffect(() => {
        const TimerId = setInterval(() => {
            setCountdown(prev => prev-1)
        }, 1000);
        return () => clearInterval(TimerId)
    },[])

    return (
        <div className='page-body'>
            <h2>Timer</h2>
            <h2>{countdown}</h2>
        </div>
    )
};

export default Timer;