import React, { useContext } from 'react';
import {f_name, l_name} from "./UseContext";

const ComB = () => {
    const fname = useContext(f_name);
    const lname = useContext(l_name);
    return (
        <>
            <h1> My Name is {fname} {lname} </h1>
        </>
    )
}
export default ComB;