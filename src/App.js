import React,{ useEffect, useState } from 'react';
import  Context  from './components/context/Context';
import User from './components/user';


function App() {
 const [data, setdata] = useState([]);

  useEffect(() => {
    setdata([
      {
        name:'Mardonis Alves',
        email:'mardonisgp@gmail.com'
      }
      ,
      {
        name:'Pedro Alves',
        email:'pedro@gmail.com'
      }
    ])
  },[])

  return (
     <Context.Provider value={data}>
      <User />
     </Context.Provider>
  );

 
}

export default App;
