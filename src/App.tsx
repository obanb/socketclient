import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";



function App() {

    useEffect(() => {
        const socket = socketIOClient('http://localhost:8080');
        socket.on("connection", (event: any) => {
            console.log(event);
        });
    },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reloaded.
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
