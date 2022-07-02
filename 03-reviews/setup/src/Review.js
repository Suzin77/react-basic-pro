import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex;
      index === 0 ? newIndex = people.length-1 : newIndex = index-1;
      return newIndex;
    })
  }

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex;
      index === people.length-1 ? newIndex = 0 : newIndex = index+1;
      return newIndex;
    })
  }

  const randomPerson = () => {
    let newRandom = Math.floor(Math.random()*people.length);
    setIndex(newRandom);
  }
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>Suprise me {index}</button>
  </article>;
};

export default Review;
