import React from 'react';

export default function SectionHeading(props) {
  return (
    <div className="heading">
      {/* <p>SERVICES</p> */}
      <p>{props.subHeading}</p>
      {/* <h2>My Services</h2> */}
      <h2>{props.heading}</h2>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum standard dummy text.
      </span>
    </div>
  );
}
