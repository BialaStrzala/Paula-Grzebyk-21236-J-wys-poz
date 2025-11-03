import React, { useState } from 'react';
import rzeka from './rzeka.jpg';

function ShowImage() {     
    const [show, setShow] = useState(false);      
    return (
        <div>       
            <h2>ShowImage</h2>      
            <button onClick={() => setShow(prev => !prev)}>                 
                {show ? 'Ukryj obraz' : 'Pokaż obraz'}             
            </button><br/>
            {show && <img src={rzeka} />}
        </div>
    ); 
}  
        
export default ShowImage;