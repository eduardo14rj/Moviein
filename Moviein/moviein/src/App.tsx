import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from "./api/api";

type users = {
  id: number,
  email: string,
  name: string,
  role: string
}

function App() {
const [u, setU] = useState<users[]>([]);

async function teste(){
  try {
    var res = await Api.get("/users");
    var user: users[] = res.data.users;
    console.log(user);
    setU(user);
    console.log(res); // Verifique os dados retornados
} catch (error) {
    console.error('Erro ao fazer a solicitação:', error);
}
}

  useEffect(() => {
    // eslint-disable-next-line
    (async() => { 
    await teste();
   })();
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            u.map(r => (
              <div>
                <p>{r.name}</p>
                <p>{r.email}</p>
                <p>{r.id}</p>
                <p>{r.role}</p>
              </div>
            ))
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
