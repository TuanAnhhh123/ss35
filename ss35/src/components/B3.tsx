import React, { useState } from 'react';

const B3: React.FC = () => {
  const [color, setColor] = useState<string>('black');

  const handleChangeColor = () => {
    setColor(color === 'black' ? 'red' : 'black');
  };

  return (
    <div>
      <h1 style={{ color }}>Tiêu đề văn bản</h1>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
};

export default B3;
