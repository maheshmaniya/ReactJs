// const name = "mack";

// const surName = "manya";

// function f_name(){
//   let date = new Date();
//   return date.getHours();
// }

// export default name; // we can only one item set as export default 

// export{surName, f_name};

// // 2. calculator

// import {add, div, mul, less} from "./cal";

// function App(){
//   return(
//     <>
//       <ol>
//         <li>sum of {add(10,20)}</li>
//         <li>division of {div(10,20)}</li>
//         <li>less of {less(10,20)}</li>
//         <li>multiplication of {mul(10,20)}</li>
//       </ol>
//     </>
//   )
// };

// 3. cart site 

// import Cart from "./Cart";
// import data from "./data";

// const app =  () => (
//     <>
//         <h1 className="heading_style">Shopping Sites</h1>
//         {data.map((val) => {
//             return (
//                 < Cart
//                     key={val.id}
//                     imgSrc={val.imgSrc}
//                     title={val.title}
//                     link={val.link}
//                 />
//             );
//         })};
//     </>
// );

// export default app;

// 4. concept of hooks

import React, { useState } from "react";

const App = () => {

    let latTime = new Date().toLocaleTimeString();
    // const [count, setCount] = useState(100);
    const [currTime, newTime] = useState(latTime);

    const updateTime = () => {
        let getClickTime = new Date().toLocaleTimeString();
        newTime(getClickTime);
    }

    setInterval(updateTime, 1000) // digital clock

    // const incNum = () => {
    //     setCount(count - 10)
    // }

    return (
        <>
            <div className="state">
                <h1>{currTime}</h1>
                {/* <button onClick={updateTime}>CLick me</button> on button  click  time will change */}
            </div>
        </>

    );

}

export default App;

