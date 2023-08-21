import React from 'react';

const Contact = () => {
    return (
        <div name="contact-me" className="contact">
            <h1>Contact me</h1>
            <form className="contact-form" action="https://formsubmit.co/ntsakon3@gmail.com" method="POST">
                <input className="contact-input" name="name" type="text" placeholder="Enter your name" />
                <input className="contact-input" name="email" type="email" placeholder="Enter your email" />
                <textarea className="contact-textarea" name="message" placeholder="Write your message"></textarea>
                <button className="contact-button" type="submit">Send</button>
            </form>
            <h3 className='reduce_line'>Phone number: +27 79 890 3298</h3>
            <h3 className='reduce_line'>Email: ntsakon3@gmail.com</h3>
        </div>
    );
}

export default Contact;
