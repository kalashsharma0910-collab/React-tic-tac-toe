import { winningCombinations } from '../winning_combinations.js'
 
export default function GameBoard({ onSelection ,board}) {
//     const [gameBoard,setGameBoard]=useState(initialGameBoard);
//     function handleClick(rowIndex,colIndex){
//         setGameBoard((previous)=>{
//          let copy=[...previous.map((e)=>[...e])]
//  copy[rowIndex][colIndex]=currSymbol;
        
       
//         return copy;
//              });
//    onSelection();
//     }


    return (
        <ol id='game-board'>
           {
           board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}>
                    <button onClick={()=>onSelection(rowIndex,colIndex)} disabled={playerSymbol !== null}>
                        {playerSymbol}
                    </button>
                </li>)}
            </ol>
            </li>)
            }
        </ol>
    )
}