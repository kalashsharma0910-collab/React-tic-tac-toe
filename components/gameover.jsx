export default function GameOver({ winner ,rematch})
{
    return(
        <div id='game-over'>
         <h2>Game Over!</h2>
         {   winner==null?  <p>It's a draw!</p>: <p>{winner} won the game !</p> }
    
         <button onClick={rematch}>Rematch!</button>
        </div>
    )
}