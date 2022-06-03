import './index.css';


export const Keyboard = (props) => {

    return (
        <div className="keyboard">
            <div>
                <button    onClick={props.func_dicas}>💡</button>
                <button    onClick={props.restart}>🔄</button>
            </div>
            
            <div className="key-wrapper">
                <ul className="row">
                    <li className={`key ${props.active[0] ? 'active':''}`} onClick={()=>{props.clicou('Q')}}>q</li>
                    <li className={`key ${props.active[1] ? 'active':''}`} onClick={()=>{props.clicou('W')}}>w</li>
                    <li className={`key ${props.active[2] ? 'active':''}`} onClick={()=>{props.clicou('E')}}>e</li>
                    <li className={`key ${props.active[3] ? 'active':''}`} onClick={()=>{props.clicou('R')}}>r</li>
                    <li className={`key ${props.active[4] ? 'active':''}`} onClick={()=>{props.clicou('T')}}>t</li>
                    <li className={`key ${props.active[5] ? 'active':''}`} onClick={()=>{props.clicou('Y')}}>y</li>
                    <li className={`key ${props.active[6] ? 'active':''}`} onClick={()=>{props.clicou('U')}}>u</li>
                    <li className={`key ${props.active[7] ? 'active':''}`} onClick={()=>{props.clicou('I')}}>i</li>
                    <li className={`key ${props.active[8] ? 'active':''}`} onClick={()=>{props.clicou('O')}}>o</li>
                    <li className={`key ${props.active[9] ? 'active':''}`} onClick={()=>{props.clicou('P')}}>p</li>
                </ul>

                <ul className="row">
                    <li className={`key ${props.active[10] ? 'active':''}`} onClick={()=>{props.clicou('A')}}>a</li>
                    <li className={`key ${props.active[11] ? 'active':''}`} onClick={()=>{props.clicou('S')}}>s</li>
                    <li className={`key ${props.active[12] ? 'active':''}`} onClick={()=>{props.clicou('D')}}>d</li>
                    <li className={`key ${props.active[13] ? 'active':''}`} onClick={()=>{props.clicou('F')}}>f</li>
                    <li className={`key ${props.active[14] ? 'active':''}`} onClick={()=>{props.clicou('G')}}>g</li>
                    <li className={`key ${props.active[15] ? 'active':''}`} onClick={()=>{props.clicou('H')}}>h</li>
                    <li className={`key ${props.active[16] ? 'active':''}`} onClick={()=>{props.clicou('J')}}>j</li>
                    <li className={`key ${props.active[17] ? 'active':''}`} onClick={()=>{props.clicou('K')}}>k</li>
                    <li className={`key ${props.active[18] ? 'active':''}`} onClick={()=>{props.clicou('L')}}>l</li>
                </ul>

                <ul className="row">
                    <li className={`key ${props.active[19] ? 'active':''}`} onClick={()=>{props.clicou('Z')}}>z</li>
                    <li className={`key ${props.active[20] ? 'active':''}`} onClick={()=>{props.clicou('X')}}>x</li>
                    <li className={`key ${props.active[21] ? 'active':''}`} onClick={()=>{props.clicou('C')}}>c</li>
                    <li className={`key ${props.active[22] ? 'active':''}`} onClick={()=>{props.clicou('V')}}>v</li>
                    <li className={`key ${props.active[23] ? 'active':''}`} onClick={()=>{props.clicou('B')}}>b</li>
                    <li className={`key ${props.active[24] ? 'active':''}`} onClick={()=>{props.clicou('N')}}>n</li>
                    <li className={`key ${props.active[25] ? 'active':''}`} onClick={()=>{props.clicou('M')}}>m</li>
                    
                </ul>
            </div>
        </div>

    )
}
export default Keyboard;