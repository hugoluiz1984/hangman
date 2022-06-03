import './App.css';
import React, { useEffect, useState } from 'react';
import Keyboard from './components/Keyboard'
import { Palavras } from './components/Palavras';
import { Animais } from './components/Data/words';
import Draw from './components/Desenho';

function App() {


  const [tabuleiro, setTabuleiro] = useState([[]]);
  const [wordSelector, setWordSelector] = useState();
  const [win, setWin] = useState(false);
  const [youLose, setYouLose] = useState(false);
  const [dicas, setDicas] = useState(false);
  const [active, setActive] = useState([]);
  const [lives, setLives] = useState(-1);


  useEffect(()=>{
    let num=Math.floor(Math.random() * (Animais.length));
    setWordSelector(Animais[num]);
    let tmpLetras = [];
    let qtdLetras = Animais[num].length;
    criarListaLetras(qtdLetras, tmpLetras);
    setActive([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
    }
  
  ,[])
  useEffect(()=>{
    if(lives===6){
      setYouLose(true);
    }
  },[lives])


  function criarListaLetras(quantidade, tmpLetras){
    
      for (let i = 0; i < quantidade; i++) {
        tmpLetras.push(
          {
            index: i,
            valor:"",
        },
        )
    }
    setTabuleiro(tmpLetras);
  }

  function clicou(n){
    
    let tmpTabuleiro = [...tabuleiro]
    let tmpActive = [...active]
    let tmpLetra = wordSelector.includes( n ) ;
    let tmpLives = lives;
    //let tmpP1 = [...p1]; 
    console.log(tmpLetra)
    if (tmpLetra){
      for (let i = 0; i < wordSelector.length; i++){
        if (n === wordSelector[i] )
        {
          tmpTabuleiro[i].valor=n;
        }
      }
    }else {
      tmpLives++

    }
    setLives(tmpLives)
    corTeclado(n, tmpActive)
    //setP1(tmpP1);
    setActive(tmpActive);
    setTabuleiro(tmpTabuleiro);
    console.log(lives,youLose);
  }
  function corTeclado(letra,tmpActive){

    switch (letra) {
        case 'Q':
            tmpActive[0] = true;
            break;
        case 'W':
            tmpActive[1] = true;
            break;
        case 'E':
            tmpActive[2] = true;
            break;
        case 'R':
            tmpActive[3] = true;
            break;
        case 'T':
            tmpActive[4] = true;
            break;
        case 'Y':
            tmpActive[5] = true;
            break;
        case 'U':
            tmpActive[6] = true;
            break;
        case 'I':
            tmpActive[7] = true;
            break;
        case 'O':
            tmpActive[8] = true;
            break;
        case 'P':
            tmpActive[9] = true;
            break;
        case 'A':
            tmpActive[10] = true;
            break;
        case 'S':
            tmpActive[11] = true;
            break;
        case 'D':
            tmpActive[12] = true;
            break;
        case 'F':
            tmpActive[13] = true;
            break;
        case 'G':
            tmpActive[14] = true;
            break;
        case 'H':
            tmpActive[15] = true;
            break;
        case 'J':
            tmpActive[16] = true;
            break;
        case 'K':
            tmpActive[17] = true;
            break;
        case 'L':
            tmpActive[18] = true;
            break;
        case 'Z':
            tmpActive[19] = true;
            break;
        case 'X':
            tmpActive[20] = true;
            break;
        case 'C':
            tmpActive[21] = true;
            break;
        case 'V':
            tmpActive[22] = true;
            break;
        case 'B':
            tmpActive[23] = true;
            break;
        case 'N':
            tmpActive[24] = true;
            break;
        case 'M':
            tmpActive[25] = true;
            break;        
        default:
            break;
    }
  }

  return (
    <div>
      {wordSelector}
      <Palavras tabuleiro={tabuleiro}/>
      <Draw lives={lives}/>
      <Keyboard clicou={clicou} active={active} dicas={setDicas}/>
    </div>
  );
}

export default App;
