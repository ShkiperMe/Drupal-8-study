import React from 'react';
import LoginForm from "../forms/LoginForm";


export default () => (
  <div className="new-language-form">
    <p>{'You need to be authorized if you want to add new language'}</p>
    <LoginForm/>
  </div>
);