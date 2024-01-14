import { useState } from "react";
import "../styles/cardContainer.css";
import Card from "./Card";
import Add from "./Add";
const players = [
  {
    id: 1,
    pName: "Orgil",
    pScore: 0,
  },
  {
    id: 2,
    pName: "Bilguun",
    pScore: 0,
  },
  {
    id: 3,
    pName: "Enkhee",
    pScore: 0,
  },
  {
    id: 4,
    pName: "Oyuka",
    pScore: 0,
  },
];
const CardContainer = () => {
  const [scores, setScores] = useState(players);

  const increase = (id) => {
    let updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore++;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScores(updateScores);
  };

  const decrease = (id) => {
    let updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore--;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScores(updateScores);
  };

  const reset = () => {
    let updateScores = scores.map((score) => {
      score.pScore = 0;
      return score;
    });
    console.log("updateScores:", updateScores);
    setScores(updateScores);
  };
  // const increase = (index) => {
  //   const updateScores = [...scores];
  //   updateScores[index].pScore += 1;
  //   setScores(updateScores);
  // };
  // const decrease = (index) => {
  //   const updateScores = [...scores];
  //   updateScores[index].pScore -= 1;
  //   setScores(updateScores);
  // };

  return (
    <div className="cardContainer">
      {scores.map((player, index) => {
        return (
          <Card
            pName={player.pName}
            pScore={player.pScore}
            id={player.id}
            key={index}
            increase={increase}
            decrease={decrease}
          />
        );
      })}
      <button onClick={() => reset()}>Reset</button>
      <Add />
    </div>
  );
};
export default CardContainer;
//   const [count1, setCount1] = useState(1);
//   const [count2, setCount2] = useState(1);
//   const [count3, setCount3] = useState(1);
//   const data = [
//     {
//       name: "Orgil",
//       score: count1,
//       id: 1,
//     },
//     {
//       name: "Enkhee",
//       score: count2,
//       id: 2,
//     },
//     {
//       name: "Tsendee",
//       score: count3,
//       id: 3,
//     },
//   ];
//   data.sort((a, b) => b.score - a.score);

//   const [scores, setScores] = useState(data);

//   function resetBtn() {
//     setCount1(1);
//     setCount2(1);
//     setCount3(1);
//   }
//   return (
//     <div className="cardContainer">
//       {data.map((e) => {
//         return (
//           <Card
//             name={e.name}
//             score={e.score}
//             countUp={() => {
//               // if (e.id == 1) {
//               //   return setCount1(count1 + 1);
//               // }
//               // if (e.id == 2) {
//               //   return setCount2(count2 + 1);
//               // }
//               // if (e.id == 3) {
//               //   return setCount3(count3 + 1);
//               // }
//               e.id == 1
//                 ? setCount1(count1 + 1)
//                 : e.id == 2
//                 ? setCount2(count2 + 1)
//                 : setCount3(count3 + 1);
//             }}
//             countDown={() => {
//               e.id == 1
//                 ? setCount1(count1 - 1)
//                 : e.id == 2
//                 ? setCount2(count2 - 1)
//                 : setCount3(count3 - 1);
//             }}
//           />
//         );
//       })}
//       <div className="card">
//         <p>{data[0].name}</p>
//         <div className="stepper">
//           <button onClick={() => setCount1(count1 - 1)}>-</button>
//           {count1}
//           <button onClick={() => setCount1(count1 + 1)}>+</button>
//         </div>
//       </div>
//       <div className="card">
//         <p>{data[1].name}</p>
//         <div className="stepper">
//           <button onClick={() => setCount2(count2 - 1)}>-</button>
//           {count2}
//           <button onClick={() => setCount2(count2 + 1)}>+</button>
//         </div>
//       </div>
//       <div className="card">
//         <p>{data[2].name}</p>
//         <div className="stepper">
//           <button onClick={() => setCount3(count3 - 1)}>-</button>
//           {count3}
//           <button onClick={() => setCount3(count3 + 1)}>+</button>
//         </div>
//       </div>
//       <button onClick={resetBtn}>ResetBtn</button>
//     </div>
//   );
// }
