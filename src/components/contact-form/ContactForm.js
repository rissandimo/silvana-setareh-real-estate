import React, { useState } from 'react';
import './ContactForm.css';

import FacebookIcon from '@material-ui/icons/Facebook';

import { Button, FormControl, TextareaAutosize, TextField } from '@material-ui/core';

const ContactForm = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');

    return (

    <div className="contact">

        <div className="form">
            <div class="form-wrap">
                <form>
                <div class="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" name="firstName" id="first-name" />
                </div>
                <div class="form-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" name="lastName" id="last-name" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <button type="submit" class="btn">Sign Up</button>
                </form>
            </div>
        </div>

    </div>

    


    )
}

export default ContactForm;