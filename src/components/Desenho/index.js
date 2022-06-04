import './index.css'
import React ,{useState, useEffect} from 'react'
import step0 from "../images/0.jpg";
import step1 from "../images/1.jpg";
import step2 from "../images/2.jpg";
import step3 from "../images/3.jpg";
import step4 from "../images/4.jpg";
import step5 from "../images/5.jpg";
import step6 from "../images/6.jpg";

function Draw(Props) {
   const [imagem, setImage] = useState(step0)
   useEffect(() => {
    if (Props.lives === 0){setImage(step0)}
    else if (Props.lives === 1){
        setImage(step1)
    }else if (Props.lives === 2){
        setImage(step2)
    }else if (Props.lives === 3){
        setImage(step3)
    }else if (Props.lives === 4){
        setImage(step4)
    }else if (Props.lives === 5){
        setImage(step5)
    }else if (Props.lives === 6){
        setImage(step6)
    }
   }, [Props.lives]);
    

 return (
    <div className="hang">
        { Props.lives >= 0 ?
          <img src={imagem} alt={Props.lives} />
            :''}
    </div>
 )
}

export default Draw