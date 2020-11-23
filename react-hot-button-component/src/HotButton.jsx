import React, { useEffect, useState } from 'react';

const HotButton = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(0);
  const [fontColor, setFontColor] = useState('#000');
  const colorsArray = ['rgb(64,0,119)', 'rgb(114,62,169)', 'rgb(243,86,92)', 'rgb(255,177,96)', 'rgb(248,255,0)', 'rgb(255,255,255)'];

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count && count <= 18 && count % 3 === 0) {
      setBackgroundColor(colorsArray[count / 3 - 1]);
    }
    if (count >= 3 && count <= 9) {
      setFontColor('#fff');
    } else if (count >= 12) {
      setFontColor('#000');
    } else {
      setFontColor('#000');
    }
  });

  return (
    <div className="button__container">
      <button className="button" style={{ backgroundColor: backgroundColor, color: fontColor }} onClick={handleClick}>Hot Button</button>
      <p className="count">Click Count: {count}</p>
    </div>
  );
};

export default HotButton;
