import React, { useState } from 'react';
import './App.css';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [player1Roll, setPlayer1Roll] = useState(null);
  const [player2Roll, setPlayer2Roll] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => Math.floor(Math.random() * 6);

  const handleRoll = () => {
    setIsRolling(true);
    setTimeout(() => {
      const roll1 = rollDice();
      const roll2 = rollDice();
      setPlayer1Roll(roll1);
      setPlayer2Roll(roll2);

      if (roll1 > roll2) {
        setWinner('Player 1');
      } else if (roll2 > roll1) {
        setWinner('Player 2');
      } else {
        setWinner('It\'s a tie!');
      }

      setIsRolling(false);
    }, 400); // Simulate a delay for rolling animation
  };

  return (
    <div className="App">
      <div className="game-container">
        <h1>Dice Game</h1>
        <button onClick={handleRoll} disabled={isRolling} className="roll-button">
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
        <div className="results">
          <div className="dice-container">
            <h2>Player 1</h2>
            {player1Roll !== null && (
              <img
                src={diceImages[player1Roll]}
                alt={`Player 1 rolled ${player1Roll + 1}`}
                className={`dice ${isRolling ? 'rolling' : ''}`}
              />
            )}
          </div>
          <div className="dice-container">
            <h2>Player 2</h2>
            {player2Roll !== null && (
              <img
                src={diceImages[player2Roll]}
                alt={`Player 2 rolled ${player2Roll + 1}`}
                className={`dice ${isRolling ? 'rolling' : ''}`}
              />
            )}
          </div>
        </div>
        <h2 className="winner">{winner && `Winner: ${winner}`}</h2>
      </div>
    </div>
  );
}

export default App;
