import React, { useState, useEffect} from 'react';

const Effect = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        // alert('wbwh')
        document.title = `you click me ${num} times`;
    });

    return(
        <>
            <h1> Concept of useeffect.we can use this hooks after rendering DOM elements for adding somthing.</h1>
            <button 
            onClick={() => {
                setNum(num+1);
            }}>
                 CLick Me {num}
            </button>
        </>
    )
}

export default Effect;