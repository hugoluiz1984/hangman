import './index.css';
export const Palavras = (Props) => {

        return(
            <div className="cont">  
                
                    <div  className={`palavras `}>
                            {
                                Props.tabuleiro.map((coluna, numeroColuna)=>{
                                    return (
                                        <div className={`letras`} 
                                        key= {numeroColuna}>
                                           {Props.tabuleiro[numeroColuna].valor}
                                        </div>
                                    )
                                })
                            }
                        </div>
            </div>
        
    )
}