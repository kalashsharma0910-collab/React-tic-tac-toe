import {useState} from 'react'

export default function Player({name,symbol,className,isActive,winner})
{
    const [PlayerName,setPlayerName]=useState(name);
    const [IsEdting,setIsEditing] =useState(false);

    
function handleEditClick()
{
    
setIsEditing(edit=>!edit);
// react gives current state value to edit automatically and we can use it to toggle the state value.
}

function handleInputChange(e)
{
    setPlayerName(e.target.value);
    winner(symbol,e.target.value);
}
let btnText=IsEdting?'SAVE':'EDIT';
    return(
         <li className={isActive?'active':''}>
          <span className={className}>
            { !IsEdting ? <span className='player-name' >{PlayerName}</span>
             :
             <input type='text'  required 
            value={PlayerName}  onChange={handleInputChange}
             />
            }
        
            <span className='player-symbol'>{symbol}</span>
          </span>
              <button onClick={handleEditClick}>{btnText}</button>
        
        </li>
    )
}