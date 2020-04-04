import React from 'react';

const ContactLink = (props) => {
  return(
  <div style={{textAlign: "center"}}>
  <a
    href={props.link}
    style={{color: "black"}}
    >
    {props.text}
  </a>
  </div>
)}

export default ContactLink
