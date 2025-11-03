import { useState } from 'react'; 

function HandleMouseOver() { 
    const [txt, setTxt] = useState("Przycisk"); 
    
    return ( 
        <div>
            <h2>HandleMouseOver</h2>
            <button onMouseOver={() => setTxt("Myszka nad przyciskiem")} onMouseOut={() => setTxt("Myszka za przyciskiem")}>{txt}</button> 
        </div> 
    ); 
}
    
export default HandleMouseOver;