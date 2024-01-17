import React, { useState } from 'react';

const MyImage = ({ imgs = [{ url: '' }] }) => {
  const [mainImg, setMainImg] = useState(imgs[0]);
  // console.log(imgs);
  return (
    <div className='single-image'>
      <div className='four-column'>
        {imgs.map((curElem, index) => {
          return (
            <figure>
              <img
                className='four-img'
                src={curElem.url}
                alt={curElem.filenamename}
                key={index}
                onClick={() => {
                  setMainImg(curElem);
                }}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column */}
      <div className='main-screen'>
        <img
          src={mainImg.url}
          alt={mainImg.filename}
          className='main-screen-img'
        />
      </div>
    </div>
  );
};

export default MyImage;
