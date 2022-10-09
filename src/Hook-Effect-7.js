import {useState} from 'react';

const lessons = [
    {
        id: 1,
        course: 'What is the React JS?'
    },
    {
        id: 2,
        course: 'How to create a accessible website?'
    },
    {
        id: 3,
        course: 'Authentication with Firebase: Key Points'
    }
]

const ChatBox = () => {

    const [color, setColor] = useState()

    const Content = () => {
        return (
            <div>
                {lessons.map(lesson => (
                    <ul key={lesson.id}>
                        <li style={{color: color === lesson.id ? 'red' : '#333'}} onClick={() => {setColor(lesson.id)}}>{lesson.course}</li>
                    </ul>
                ))}
            </div>
        )
    };

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className='page-body'>
            <button className='button' onClick={handleClick}>Toggle the Courses</button>
            {toggle && (
                <>
                    <h2>Pick a Course</h2>
                    <Content />
                </>
            )}
        </div>
    )
};

export default ChatBox;