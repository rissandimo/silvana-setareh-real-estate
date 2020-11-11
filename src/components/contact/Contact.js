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
        <p>Email Me</p>
        <form>
            <div className="contact__group">
            <FormControl>
                <TextField value={firstName} label='First Name' onChange={e => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl>
                <TextField value={lastName} label='Last Name' onChange={e => setLastName(e.target.value)} />
            </FormControl>
            </div>

            <div className="contact__group">
            <FormControl>
                <TextField value={email} label='Email' onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <TextField value={phone} label='Phone' onChange={e => setPhone(e.target.value)} />
            </FormControl>
            </div>
            
            <FormControl>
            <TextareaAutosize cols={30} rowsMin={4} placeholder="Comments" />
            </FormControl>
            <Button>Send</Button>
        </form>
    </div>
    )
}

export default Contact;