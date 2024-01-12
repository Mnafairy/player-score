import "../styles/card.css";
export default function Card({ id, pName, pScore, increase, decrease }) {
  return (
    <div className="card">
      <p>{pName}</p>
      <div className="stepper">
        <button onClick={() => decrease(id)}>-</button>
        <p>{pScore}</p>
        <button onClick={() => increase(id)}>+</button>
      </div>
    </div>
  );
}
// export default function Card({ name, score, countUp, countDown }) {
//   return (
//     <div className="card">
//       <p>{name}</p>
//       <div className="stepper">
//         <button onClick={() => countDown(score)}> - </button>
//         {score}
//         <button onClick={() => countUp(score)}> + </button>
//       </div>
//     </div>
//   );
// }
// const players = [
//   {
//     id: 1,
//     playerName: "John Cena",
//     playerScore: 10,
//   },
//   {
//     id: 2,
//     playerName: "John John",
//     playerScore: 8,
//   },
//   {
//     id: 3,
//     playerName: "John Kena",
//     playerScore: 5,
//   },
// ];

// export const PlayerScore = () => {
//   const [scores, setScores] = useState(players);

//   const increase = (index) => {
//     const updatedScores = [...scores];
//     updatedScores[index].playerScore += 1;
//     setScores(updatedScores);
//   };

//   const decrease = (index) => {
//     const updatedScores = [...scores];
//     updatedScores[index].playerScore -= 1;
//     setScores(updatedScores);
//   };

//   // const increase = (index) => {
//   //   setScores((players[index].playerScore = +1));
//   //   // result number, string
//   // };
//   return (
//     <div>
//       {scores.map((player, index) => (
//         <div key={index}>
//           <button onClick={() => increase(index)}>+</button>
//           <span>
//             {player.playerName}: {player.playerScore}
//           </span>
//           <button onClick={() => decrease(index)}>-</button>
//         </div>
//       ))}
//     </div>
//   );
// };
