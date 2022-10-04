import {useState} from 'react';

const FormSubmitting = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SubmitHandle = () => {
        console.log({email, password})
    };
    
    return (
        <div className='page-body'>
            <h2>Form Submitting</h2>
            <input value={email} placeholder='email' onChange={e => setEmail(e.target.value)} />
            <input value={password} placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button onClick={SubmitHandle}>Submit</button>
        </div>
    )
};

export default FormSubmitting;