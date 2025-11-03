import React, { useState, useEffect } from 'react';  

function LoadDataFromJson() { 
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('./zadania.json').then(response => response.json()).then(data => console.log(data));
    }, []);
    
    return (
        <div>
            <h2>LoadDataFromJson</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    ); 
}
    
export default LoadDataFromJson;