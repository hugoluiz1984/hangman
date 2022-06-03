import './index.css';
export const Palavras = (Props) => {

        return(
            <div className="palavras">  
                
                    <div  className={`palavras `}>
                            {
                                Props.tabuleiro.map((coluna, numeroColuna)=>{
                                    return (
                                        <div className={`letras`} 
                                        key= {numeroColuna}>
                                           {Props.tabuleiro[numeroColuna]}
                                        </div>
                                    )
                                })
                            }
                        </div>
            </div>
        
    )
}