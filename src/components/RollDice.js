import { useState } from "react";
import './RollDice.css';

function RollDice() {
    const [diceSide, setDiceSide] = useState(1);
    const [diceRoll, setDiceRoll] = useState(false);

    function rollDice() {
        setDiceRoll(true);
        
        setTimeout(() => {
            setDiceRoll(false);
            setDiceSide(Math.floor(Math.random()*6)+1);
        }, 2000);
    }
    
    return (
        <div className="dice-container">
            <div className={"dice " + (diceRoll?" dice-animation" : "")}>
                
                <div className="dice-side">{diceSide}</div>
            </div>
            <button className="roll-dice-button" onClick={rollDice}>Roll Dice</button>
        </div>
      );
}
    
export default RollDice;
