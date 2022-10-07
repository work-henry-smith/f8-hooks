import {useState, useEffect} from 'react';

const PreviewAvatar = () => {
    const [view, setView] = useState();

    useEffect(() => {
        return(() => {view && URL.revokeObjectURL(view.preview)})
    }, [view])

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)

        setView(file)
    }
    return (
        <div className='page-body'>
            <h2>Preview Your Picture</h2>
            <input type='file' onChange={handlePreview} />
            {view && (<img src={view.preview} alt='anh tai len' width='80%' />)}
        </div>
    )
};

export default PreviewAvatar;