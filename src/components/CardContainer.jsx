import { useState } from "react";
import "../styles/cardContainer.css";
// import Card from "./Card";
export default function CardContainer() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  let names = ["Orgil", "Khuslen", "Ganbaa"];
  function resetBtn() {
    setCount1(1);
    setCount2(1);
    setCount3(1);
  }
  return (
    <div className="cardContainer">
      <div className="card">
        <p>John Cena</p>
        <div className="stepper">
          <button onClick={() => setCount1(count1 - 1)}>-</button>
          {count1}
          <button onClick={() => setCount1(count1 + 1)}>+</button>
        </div>
      </div>
      <div className="card">
        <p>John Cena</p>
        <div className="stepper">
          <button onClick={() => setCount2(count2 - 1)}>-</button>
          {count2}
          <button onClick={() => setCount2(count2 + 1)}>+</button>
        </div>
      </div>
      <div className="card">
        <p>John Cena</p>
        <div className="stepper">
          <button onClick={() => setCount3(count3 - 1)}>-</button>
          {count3}
          <button onClick={() => setCount3(count3 + 1)}>+</button>
        </div>
      </div>
      <button onClick={resetBtn}>ResetBtn</button>
    </div>
  );
}
