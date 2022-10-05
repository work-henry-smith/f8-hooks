import {useState, useEffect} from 'react';

const TitleSetting = () => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        document.title = title
    })
    return (
        <div className='page-body'>
            <h2>Update Your Title</h2>
            <input placeholder='set your title here' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    )
};

export default TitleSetting;