import {useState, useEffect} from 'react';

const FetchingData = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(k => setPosts(k))
    },[])
    return (
        <div className='page-body'>
            <h2>Contents List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.ID}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default FetchingData;