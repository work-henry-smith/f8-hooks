import { useState } from "react";

const houses = [
    {
        id: 1,
        type: 'Americas',
        material: 'Wood',
    },
    {
        id: 2,
        type: 'Europe',
        material: 'Iron',
    },
    {
        id: 3,
        type: 'Asia',
        material: 'Concrete',
    },
    {
        id: 4,
        type: 'Africa',
        material: 'Brick',
    },
    {
        id: 5,
        type: 'Australia',
        material: 'Glass',
    },
];

const CheckBox = () => {
    const [checked, setChecked] = useState([]);

    const CheckHandle = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            // if already checked
            if (isChecked) {
                return checked.filter(item => item !== id)
            }
            // if not checked yet
            else {
                return [...prev,id]
            }
        })
    };

    const SubmitHandle = () => {
        console.log({id:checked})
    };

    return (
        <div className='page-body'>
            <h2>Check Box for Choosing Houses</h2>
            {houses.map(house => (
                <div key={house.id}>
                    <input type='checkbox' onChange={() => CheckHandle(house.id)} checked={checked.includes(house.id)} />
                    {`${house.type} - ${house.material}`}
                </div>
            ))}
            <button className='button' onClick={SubmitHandle}>Choose</button>
        </div>
    )
};

export default CheckBox;