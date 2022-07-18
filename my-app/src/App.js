import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Beers } from './components/BeerTable'
import { OutOfRange } from './components/OutOfRange'
import { Expected } from './components/Expected'
import { getAllBeers } from './services/BeerService'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3000";

function App() {
  const [beers, setBeers] = useState([])
  const [numberOfBeers, setNumberOfBeers] = useState(0)

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      getAllBeers()
      .then(beers => {
        console.log(beers)
        setBeers(beers);
        setNumberOfBeers(beers.length)
      });
    });
  }, []);

  const fetchAllBeers = () => {
    getAllBeers()
      .then(beers => {
        console.log(beers)
        setBeers(beers);
        setNumberOfBeers(beers.length)
      });
  }

  useEffect(() => {
    getAllBeers()
      .then(beers => {
        console.log(beers)
        setBeers(beers);
        setNumberOfBeers(beers.length)
      });
  }, [])

    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-6">
                  <Expected beers={beers}></Expected>
              </div>
              <div className="col-md-6">
                  <OutOfRange beers={beers}></OutOfRange>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Beers beers={beers}></Beers>
          </div>
        </div>
    );
}

export default App;
