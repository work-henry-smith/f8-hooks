import {useState, useEffect} from 'react';

const ResizeWindow = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth)
    };
    useEffect (() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <div className='page-body'>
            <h2>Resize Window</h2>
            <h2>{width}</h2>
        </div>
    )
};

export default ResizeWindow;