import { useState } from 'react'; 

function HandleClick() { 
    const [count, setCount] = useState(0); 
    
    return ( 
        <div>
            <h2>HandleClick</h2>
            <p>Kliknięto {count} razy</p>
            <button onClick={() => setCount(count + 1)}>Przycisk</button> 
        </div> 
    ); 
}
    
export default HandleClick;