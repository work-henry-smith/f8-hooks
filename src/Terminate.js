import {useState} from 'react';
import Timer from './Hook-Effect-5';

const Terminate = () => {
    const [touch, setTouch] = useState(false);
    return (
        <div className='page-body'>
            {touch && <Timer />}
            <button className='button' value={touch} onClick={() => setTouch(!touch)}>Toggle Timer</button>
        </div>
    )
};

export default Terminate;