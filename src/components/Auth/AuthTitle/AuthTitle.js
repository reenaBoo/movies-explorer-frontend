import React from 'react';
import './AuthTitle.css';

function AuthTitle({titleText, classStyle}) {
  return (
    <>
      <h2 className={`auth-title__${classStyle}`}>{titleText}</h2>
    </>
  )
}

export default AuthTitle;
