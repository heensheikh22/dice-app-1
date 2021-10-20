import { useState } from "react";
import './RollDice.css';

function RollDice() {
    const sides = ['one','two','three','four','five','six'];
    const [diceSide, setDiceSide] = useState(sides[2]);
    const [diceRoll, setDiceRoll] = useState(false);

    function rollDice() {
        setDiceRoll(true);
        
        setTimeout(() => {
            setDiceRoll(false);
            setDiceSide(sides[Math.floor(Math.random()*sides.length)]);
        }, 2000);
         
        
    }
    
    return (
        <div className="dice-container">
            <div className={"dice "+ diceSide + (diceRoll?" dice-animation" : "")}>

            {sides.map((side,index) => index <= sides.indexOf(diceSide) ? 
                <span key ={index} className="dot"></span>
                :""
            )}
            </div>
            <button className="roll-dice-button" onClick={rollDice}>Roll Dice</button>
        </div>
      );

}
    
export default RollDice;
