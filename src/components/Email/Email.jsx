import React from 'react';
import './Email.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Email = ({ innerRef }) => {
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_3j2ctf3',
        'template_2r2fe9i',
        form.current,
        '7BlBR_D1yBdBOnC-M'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="email">
      <div className="email_text">
        <hr />
        <div>
          <span className="stroke_text">Ready To</span>
          <span className="email_text_big">Level up</span>
        </div>
        <div>
          <span className="email_text_big">Your body</span>
          <span className="stroke_text">With us?</span>
        </div>
      </div>
      <form className="email_form" ref={form} onSubmit={sendEmail}>
        <input
          type="email"
          placeholder="Enter your Email Address here"
          ref={innerRef}
        />
        <button type="submit">Join now</button>
      </form>
    </div>
  );
};
