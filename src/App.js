import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './containers/Home';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        console.error('Error:', e);
      });
  }, []);

  return (
    <div className='App'>
      <Home data={data} />
    </div>
  );
}

export default App;
