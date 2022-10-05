// cho 5 tabs, tương ứng với 5 json files, với mỗi lần toggle, hiển thị lần lượt nội dung của 5 json files ra giao diện unordered list

import {useState, useEffect} from 'react';

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

const TabChanging = () => {
    
    const [type, setType] = useState('posts');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res => res.json()).then(posts => setPosts(posts))
    }, [type])
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
        </div>
    )
};

export default TabChanging;