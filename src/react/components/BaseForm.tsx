import * as React from 'react';
import { useState } from 'react';

export const BaseForm = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    alert(inputValue)
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
}
