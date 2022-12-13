import React from "react";

export default function Contact_Image(props) {
  return (
    <div className="contact_image_wrap">
      <img src={props.url}></img>
      <style jsx>
        {`
          .contact_image_wrap {
            width: 100%;
            height: 28.8rem;
            position: relative;
          }

          .contact_image_wrap::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            background-color: ${props.bgColor};
          }
          .contact_image_wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
}
