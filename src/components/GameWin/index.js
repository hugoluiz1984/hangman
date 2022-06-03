import React, {Fragment} from "react";
import "./index.css"

export default function GameOver(props){
    return ( props.show ?
        <div id="gameOver">
            <div class="header_container">
                <div class="header_barra">
                    <div></div>
                </div>
                <div class="header_body">
                    <div>
                    Parabéns você completou o jogo!
                    </div>
                    <p>{props.tmpPalavra}</p>
                    <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
                </div>
            </div>
            
        </div> : <Fragment/>
    )
}