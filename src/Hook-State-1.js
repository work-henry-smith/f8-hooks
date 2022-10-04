import {useState} from 'react';
import './App.css';

const CartCounting = () => {
    const [counter, setCounter] = useState(0);

    const AddHandle = () => {
        setCounter(counter + 1);
    };

    const RemoveHandle = () => {
        if (counter === 0) {
            setCounter(0);
        } else {
            setCounter(counter - 1);
        }
    };

    return(
        <div className='page-body'>
            <h2>Cart Counting</h2>
            <h2>{counter}</h2>
            <button className='button' onClick={RemoveHandle}>Remove Item</button>
            <button className='button' onClick={AddHandle}>Add Item</button>
        </div>
    )
};

export default CartCounting;