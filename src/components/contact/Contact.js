import React, { useState } from 'react';
import './Contact.css';

import { Button, FormControl, TextareaAutosize, TextField } from '@material-ui/core';

const Contact = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');

    return (

    <div className="contact">
        <p className='contact__email'>Email Me</p>
        <form>
            <div className="contact__group">
                <TextField value={firstName} label='First Name' onChange={e => setFirstName(e.target.value)} />
                <TextField value={lastName} label='Last Name' onChange={e => setLastName(e.target.value)} className='contact__group-rightInput' />
            </div>

            <div className="contact__group">
                <TextField value={email} label='Email' onChange={e => setEmail(e.target.value)} />
                <TextField value={phone} label='Phone' onChange={e => setPhone(e.target.value)} className='contact__group-rightInput' />
            </div>
            
            <textarea value={comments} placeholder='comments'> </textarea>
            <button>Send</button>
        </form>

    </div>

    


    )
}

export default Contact;