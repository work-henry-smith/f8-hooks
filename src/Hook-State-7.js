import {useState} from 'react';
import CheckBox from './Hook-State-5';

const Toggle = () => {
    const [display, setDisplay] = useState(false);
    
    return (
        <div className='page-body'>
            {display && <CheckBox />}
            <button className='button' onClick={() => setDisplay(!display)}>Turn off / on Check Box</button>
        </div>
    )
};

export default Toggle;