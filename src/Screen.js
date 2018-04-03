import React from 'react';

const Screen = ({ answer, question }) => (
  <div>
    <input
      className="form-control"
      type="text"
      value={question === '' ? answer : question}
    />
  </div>
);
export default Screen;
