export default function Log({turn}) {
    return <ol id='log'>
{turn.map((turn,index)=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected index ({turn.square.row},{turn.square.col})</li>)}

    </ol>
}