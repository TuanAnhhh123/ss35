import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [name, setName] = useState<string>('Nguyễn Văn A');

  return (
    <div>
      <h1>Họ và tên: {name}</h1>
    </div>
  );
};

export default MyComponent;
