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
        <div className="contact__form">
            <div class="form-wrap">
                <form>
                <div class="form-group">
                    <input type="text" name="fullName" id="fullName" placeholder="Name" />
                </div>
                <div class="form-group">
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div class="form-group">
                    <input type="phone" name="phone" id="phone" placeholder="Phone" />
                </div>
                <div class="form-group">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn">SEND</button>
                </form>
            </div>
        </div>



    


    )
}

export default ContactForm;