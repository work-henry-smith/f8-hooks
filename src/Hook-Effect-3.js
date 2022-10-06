// cho 5 tabs, tương ứng với 5 json files, với mỗi lần toggle, hiển thị lần lượt nội dung của 5 json files ra giao diện unordered list

import {useState, useEffect} from 'react';

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

const TabChanging = () => {
    
    const [type, setType] = useState('posts');
    const [posts, setPosts] = useState([]);
    const [gotop, setGotop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res => res.json()).then(posts => setPosts(posts))
    }, [type])

    useEffect(() => {
        const scrollHandle = () => {
            if (window.scrollY >= 200) {
                setGotop(true)
            } else {
                setGotop(false)
            }
        };
        window.addEventListener('scroll', scrollHandle)
        return () => {
            window.removeEventListener('scroll', scrollHandle)
        }
    }, [])

    return (
        <div className='page-body'>
            <h2>Change Tab</h2>
            {tabs.map(tab => (
                <button className='button' key={tab} onClick={()=> setType(tab)}>{tab}</button>
            ))}
            
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {gotop && (
                <button className='button' style={{position: 'fixed', right: 20, bottom: 20}}>Go to top</button>
            )}
        </div>
    )
};

export default TabChanging;