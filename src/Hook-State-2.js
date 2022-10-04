import {useState} from 'react';

const RandomGift = () => {
    const [gift, setGift] = useState('There is no gift');

    const items = ['CPU i9', 'RAM 32GB', '4K Screen', 'Apple Mini', 'Ziyou Lang Keyboard'];

    const GiftHandle = () => {
        const item = items[Math.floor(Math.random()*items.length)];
        return (
            setGift(item)
        )
    };

    return (
        <div>
            <h2>{gift}</h2>
            <button className='button' onClick={GiftHandle}>Receive Gift</button>
        </div>
    )
};

export default RandomGift;