import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComApi = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [setp, setStep] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            setStep(res.data.moves.length);
        } 
        getData();
    })

    return (
        <>
            <h1> You select {num} </h1>
            <h1> Name is {name} </h1>
            <h1> moves of {name} is  {setp} </h1>
            <select value={num} onChange={(e) => {
                setNum(e.target.value)
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="25">25</option>
            </select>
        </>
    )
}

export default ComApi;