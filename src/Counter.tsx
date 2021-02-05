import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current += 1
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
