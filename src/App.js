import React, {useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';

const App = () => {
  const [joke, setJoke] = useState('');
  const [animation, setAnimation] = useState(false);

  
    const fetchData = async () => {
      setAnimation(true)
      try {
        const response = await axios(url,{
          headers:{
            Accept : 'application/json'
          }
        });
        setJoke(response.data.joke);
        setTimeout(() => {
          setAnimation(false)
        },2000)

        
      } catch (error) {
        console.log(error.response);
      }
    };
    
  

  return (
    <main>
      <div className='container'>
        <h1>Dad Jokes</h1>
        <img className={animation && 'anim'} width={100} src="/mus.png" alt="" />
        <button onClick={fetchData}>Generate Joke</button>
        <hr />
        <p>{joke}</p>
      </div>
    </main>
  );
};

export default App;
