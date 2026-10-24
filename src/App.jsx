import GameBoard from '../components/gameboard.jsx'
import Player from '../components/player.jsx'
import {useState} from 'react'
import Log from '../components/log.jsx'
import { winningCombinations } from '../winning_combinations.js'
import GameOver from '../components/gameover.jsx'

   const initialGameBoard=[
    [null,null,null],
    [null,null,null]
    ,[null,null,null]
];

function deriveActivePlayer(gameTurns)
{
  let currPlayer='X'
    if(gameTurns.length > 0 && gameTurns[0].player==='X')
    {
      currPlayer='O'
    }
  return currPlayer;
}



function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const [winnerName, setWinnerName] = useState({ X: 'Player 1', O: 'Player 2' });
const gameBoard = [...initialGameBoard.map((row) => [...row])];

function HandleRematch(){
  setGameTurns([]);
}

  function handleWinner(symb, name) {
    setWinnerName((win) => ({
      ...win,
      [symb]: name||(symb==='X'?'Player 1':'Player 2'),
    }));
  }



  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winnerSymbol = null;
  for (const combination of winningCombinations) 
    {
    const firstRow = gameBoard[combination[0].row][combination[0].col];
    const secondRow = gameBoard[combination[1].row][combination[1].col];
    const thirdRow = gameBoard[combination[2].row][combination[2].col];

    if (firstRow && firstRow === secondRow && secondRow === thirdRow) {
      winnerSymbol = firstRow;
      break;
    }
  }
  const draw=gameTurns.length===9 && !winnerSymbol;



function handleActivePlayerChange(rowIndex,colIndex)
{
setGameTurns((prevTurn)=>
      {
        const currPlayer=deriveActivePlayer(prevTurn);

        const updatedTurns=[{player: currPlayer,square:{row: rowIndex, col: colIndex}}, ...prevTurn];
        return updatedTurns;
      });
  }

  return (
    <main>
     
      <div id='game-container'>
       
        <ol id='players' className='highlight-player'>
          <Player
            name='Player 1'
            symbol='X'
            className='player'
            isActive={activePlayer === 'X'}
            winner={handleWinner}
          />
          <Player
            name='Player 2'
            symbol='O'
            className='player'
            isActive={activePlayer === 'O'}
            winner={handleWinner}
          />
        </ol>

      { (winnerSymbol || draw) && <GameOver winner={winnerSymbol ? winnerName[winnerSymbol] : null} 
       rematch={HandleRematch}
       /> }

        <GameBoard onSelection={handleActivePlayerChange} board={gameBoard} />
       </div>
      <Log turn={gameTurns} />
      
    
    </main>
  );
}

export default App
