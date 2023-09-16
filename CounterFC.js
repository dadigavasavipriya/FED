import React,{useState} from 'react'
const CounterFC=()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            <button type="button" onClick={()=>setCount(count+1)}>Incr</button>
            <h3>{count}</h3>
            <button type='button' onClick={()=>setCount(count-1)}>Decr</button>
        </div>
    )
};
export default CounterFC;