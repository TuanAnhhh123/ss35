import React, { useState } from 'react';

const Count: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>

      <p>
        {count === 0
          ? "Khi chưa click"
          : `Bạn đã click ${count} lần`
        }
      </p>

      <button onClick={handleClick}>
        Click để tăng số lần click
      </button>
    </div>
  );
};

export default Count;
