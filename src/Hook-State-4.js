import { useState } from "react";

const items = [
    {
        id: 1,
        course: 'Mongo DB',
        fee: 239,
        currency: 'USD',
    },
    {
        id: 2,
        course: 'Express',
        fee: 389,
        currency: 'USD',
    },
    {
        id: 3,
        course: 'React JS',
        fee: 179,
        currency: 'USD',
    },
    {
        id: 4,
        course: 'Node JS',
        fee: 419,
        currency: 'USD',
    },
    {
        id: 5,
        course: 'Git',
        fee: 89,
        currency: 'USD',
    },
];

const RadioCheck = () => {
    const [checked, setChecked] = useState();

    const RegisterHandle = () => {
        console.log(items[checked-1]);
    };

    return (
        <div className='page-body'>
            <h2>Radio Check for Picking Courses!</h2>
            {items.map(item => (
                <div key={item.id}>
                    <input type='radio' onChange={() => setChecked(item.id)} checked={checked === item.id} />
                    {`${item.course} - ${item.fee} ${item.currency}`}
                </div>
            ))}
            <button className='button' onClick={RegisterHandle}>Register</button>
        </div>
    )
};

export default RadioCheck;