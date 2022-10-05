import {useState} from 'react';

const TodoList = () => {
    const [type, setType] = useState('');
    const [jobs, setJobs] = useState([]);
    
    const SubmitHandle = () => {
        setJobs(prev => [...prev,type])
        setType('')
    };

    return (
        <div className='page-body'>
            <h2>To Do List</h2>
            <input placeholder='your task' value={type} onChange={e => setType(e.target.value)} />
            <button className='button' onClick={SubmitHandle}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
                
            </ul>
        </div>
    )
};

export default TodoList;