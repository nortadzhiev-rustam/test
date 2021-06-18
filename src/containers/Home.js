import React, { useState } from 'react';
import Card from '../components/Card';

const Home = (props) => {
  const { data } = props;
  const [text, setText] = useState('');

  return (
    <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
      <h1 className='mt-3 heading'>Our Latest Developments</h1>
      <div className='filter-container col-12 col-md-12 col-sm-12'>
        <label htmlFor='filterInput'>Filter</label>
        <input
          className='form-control rounded-pill'
          id='filterInput'
          type='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      {text.length > 2 ? (
        <div className='d-inline-flex flex-wrap ml-2 col-sm-12'>
          {data
            .filter((item) => item.title.includes(text))
            .map((item, idx) => {
              return <Card key={idx} item={item} />;
            })}
        </div>
      ) : (
        <div className='d-inline-flex flex-wrap ml-2 col-sm-12'>
          {data.map((item, idx) => {
            return <Card key={idx} item={item} />;
          })}
        </div>
      )}

<button className="btn btn-large btn-outline-dark rounded-pill mb-5">See more ></button>

    </div>
  );
};

export default Home;
