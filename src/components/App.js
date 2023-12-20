import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const budget = 100;

  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(budget);

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(setSushis);
}, []);

function eatSushi(sushi) {
  if (!sushi.eaten && sushi.price <= money) {
  setMoney(money - sushi.price);
  setSushis(sushis.map(sush => sush.id !== sushi.id ? sush :
    {...sush, eaten: true}
    )) 
  }
}

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table plates={sushis.filter(sushi => sushi.eaten)} money ={money}/>
    </div>
  );
}

export default App;
