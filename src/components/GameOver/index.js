import React, {Fragment} from "react";
import "./index.css"

export default function GameOver(props){
    return ( props.show ?
        <div id="gameOver">
            <div>
                Você perdeu o jogo!
                <div className="texto">A palavra era:</div>
                <div className="palavra">{props.palavra}</div> 
            </div>
            
            <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
        </div> : <Fragment/>
    )
}