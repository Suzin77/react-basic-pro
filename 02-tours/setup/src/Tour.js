import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>{readMore ? info : info.slice(0,150)}</p>
      <button onClick={()=>{setReadMore(!readMore)}}>{readMore ? `Show less` : `Read more`}</button>
      <button className='delete-btn' onClick={()=>{removeTour(id)}}>Not intresting</button>
    </footer>
  </article>
};

export default Tour;
