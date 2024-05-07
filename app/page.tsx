'use client'

import React, { useState } from 'react';
interface DivState {
  id: number;
  rotate: number;
}

const HomePage: React.FC = () => {
  const [divs, setDivs] = useState<DivState[]>([]);

  const addDiv = () => {
    const newDiv: DivState = {
      id: divs.length,
      rotate: 0,
    };
    setDivs([...divs, newDiv]);
  };

  const rotateDiv = (id: number) => {
    setDivs((prevDivs) =>
      prevDivs.map((div) =>
        div.id === id ? { ...div, rotate: div.rotate + 90 } : div
      )
    );
  };

  return (
    <div className='text-center items-center justify-center bg-black'>
      <button className='bg-white shadow-sm text-black p-2 rounded-xl my-3' onClick={addDiv}>Click and spin</button>
      <div className='my-3 flex flex-wrap items-center justify-center w-[400px] mx-auto text-center'>
        {divs.map((div) => (
          <div
            className='border border-red-500 rounded-lg shadow-md shadow-red-400 h-24 w-24 m-3 text-center flex items-center justify-center'
            key={div.id}
            onClick={() => rotateDiv(div.id)}
            style={{
              transform: `rotate(${div.rotate}deg)`,
              transition: 'transform 0.2s',            
            }}
          >
             Div {div.id}
          </div>
        ))}
      </div>

    </div>
  );
};

export default HomePage;
