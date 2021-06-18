import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';

const Card = (props) => {
  const { title, address, price, type, id } = props.item;

  return (
    <div
      className='card col-12 col-lg-12 col-md-12 col-sm-12 m-4'
      style={{ width: '23rem' }}
    >
      <img
        src={
          id % 2 === 0
            ? 'https://images.unsplash.com/photo-1585735297755-629e827ec783?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            : id % 3 === 0
            ? 'https://images.unsplash.com/photo-1504788558782-ac08180950f9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            : 'https://images.unsplash.com/photo-1523206710245-44d89036b2c0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
        className='card-img-top'
        alt='...'
      />
      {type === 'IndependentLiving' ? (
        <span className='text custom-text bg-info text-end'>
          Independent Living
        </span>
      ) : (
        <span className='text custom-text bg-warning text-end'>
          Restaurant & Support Available
        </span>
      )}
      <div className='card-body'>
        <h5 className='card-title d-flex'>{title}</h5>
        <h6 className='card-subtitle text-start mb-2 text-muted'>{address}</h6>
        <p className='card-text text-start'>
          New Properties for Sale from{' '}
          <strong>
            {'\u00A3'}
            {price.toLocaleString(navigator.language, {
              minimumFractionDigits: 2,
            })}
          </strong>
          <br />
          Shared Owenership Available
        </p>
      </div>
    </div>
  );
};

export default Card;
