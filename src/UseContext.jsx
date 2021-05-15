import React, { createContext } from 'react';
import ComA from './ComA';

const f_name = createContext();
const l_name = createContext();

const context = () => {
    return (
        <>
            <f_name.Provider value="MACK">
                <l_name.Provider value="MANIYA">
                    <h1> <ComA /> </h1>
                </l_name.Provider>
            </f_name.Provider>

        </>
    )
}

export default context;
export {f_name, l_name};