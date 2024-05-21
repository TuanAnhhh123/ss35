import React, { useState } from 'react';

const Toggle: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ẩn' : 'Hiện'}
      </button>
      {isVisible && <h1>Tiêu đề văn bản</h1>}
    </div>
  );
};

export default Toggle;
