import React, {Fragment} from "react";
import "./index.css"

export default function GameOver(props){
    return ( props.show ?
        <div id="gameOver">
            <div >
                <div className="dicasLinhaTop">Como Jogar</div>
                <div className="dicasLinha">Só poderá verificar a palavra após completar todas as letras</div>
                <div className="dicas">
                    <div className="letras errada">B</div>
                    <div className="letras errada">E</div>
                    <div className="letras errada">I</div>
                    <div className="letras quase">J</div>
                    <div className="letras certa">O</div>
                </div>
                <div className="dicasLinha"><div className="letras certa"></div>Letra certa na posição certa. </div>
                <div className="dicasLinha"><div className="letras quase"></div>Letra certa na posição errada. </div>
                <div className="dicasLinha"><div className="letras errada"></div>Letra errada. </div>
                <div className="dicas">
                    <div className="letras certa">J</div>
                    <div className="letras certa">U</div>
                    <div className="letras errada">N</div>
                    <div className="letras certa">T</div>
                    <div className="letras certa">O</div>
                </div>
                <div className="dicas">Só falta 1 Letra</div>
                <div className="dicas">
                    <div className="letras certa">J</div>
                    <div className="letras certa">U</div>
                    <div className="letras certa">S</div>
                    <div className="letras certa">T</div>
                    <div className="letras certa">O</div>
                </div>
                <div className="dicas">Muito bem, Acertou!</div>

            </div>
            
            <button id="restart" onClick={props.handleRestart}>Voltar</button>
        </div> : <Fragment/>
    )
}