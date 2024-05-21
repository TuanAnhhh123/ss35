import React, { useState, ChangeEvent } from 'react';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nhập nội dung" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <p>{inputValue ? `Đang nhập: ${inputValue}` : 'Nhập nội dung'}</p>
    </div>
  );
};

export default Form;
