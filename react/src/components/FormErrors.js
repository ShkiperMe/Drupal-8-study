import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className="errors">
    {Object.keys(formErrors).map((fieldName, i) => {
      return (
        <div className="alert alert-danger" key={i}>{formErrors[fieldName]}</div>
      )
    })}
  </div>