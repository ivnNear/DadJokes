import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';

const App = () => {
  const [joke, setJoke] = useState('jkhgth');

  
    const fetchData = async () => {
      try {
        const response = await axios(url,{
          headers:{
            Accept : 'application/json'
          }
        });
        setJoke(response.data.joke);
      } catch (error) {
        console.log(error.response);
      }
    };
    
  

  return (
    <main>
      <div className='container'>
        <h1>Dad Jokes</h1>
        <button onClick={fetchData}>Generate Joke</button>
        <p>{joke}</p>
      </div>
    </main>
  );
};

export default App;
