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

// 4. concept of hooks

// import React, { useState } from "react";

// const App = () => {

//     let latTime = new Date().toLocaleTimeString();
//     const [currTime, newTime] = useState(latTime);
//     // const [count, setCount] = useState(100);

//     const updateTime = () => {
//         let getClickTime = new Date().toLocaleTimeString();
//         newTime(getClickTime);
//     }

//     setInterval(updateTime, 1000) // digital clock

//     // const incNum = () => {
//     //     setCount(count - 10)
//     // }

//     return (
//         <>
//             <div className="state">
//                 <h1>{currTime}</h1>
//                 {/* <button onClick={updateTime}>CLick me</button> on button  click  time will change */}
//             </div>
//         </>

//     );

// }


// 5. form with data show

// import React, { useState } from "react";

// const App = () => {

//     const [fullName, setFullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",
//     })
//     const inputEvent = (e) => {

//         console.log(e.target);
//         const {name , value} = e.target;

//         setFullName((preValue) => {
//             console.log(preValue);
//             return{
//                 ...preValue,
//                 [name]: value,
//             }
//         });
//     };

//     // const onSubmits = (e) => {
//     //     e.prevenDefault();
//     //     alert("form submitd");
//     // };

//     return(
//         <>
//           <div>
//               <form>
//                 <div className="main">
//                     <h1>
//                         Hello {fullName.fname} {fullName.lname}
//                     </h1>
//                     <p>{fullName.email}</p>
//                     <p>{fullName.phone}</p>
//                     <input
//                         type="text"
//                         placeholder="Enter your name"
//                         onChange={inputEvent}
//                         name="fname"
//                         value={fullName.fname}
//                     />
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="Enter your last name"
//                         onChange={inputEvent}
//                         name="lname"
//                         value={fullName.lname}
//                     />
//                     <br/>
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         onChange={inputEvent}
//                         name="email"
//                         value={fullName.email}
//                     />
//                     <br/>
//                     <input
//                         type="number"
//                         placeholder="Enter your name"
//                         onChange={inputEvent}
//                         name="phone"
//                         value={fullName.phone}
//                         autoComplete="off"
//                     />
//                     <br/>
//                     <button type="submit"> Submit Me</button>
//                 </div>
//               </form>
//           </div>          
//         </>

//     )
// }

//6. simple app with material ul icon

// import React, {useState} from "react";
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import Button from '@material-ui/core/Button';


// const App = () => {

//     const [incNum, updateNum] = useState(0);

//     const inc = () => {
//         updateNum(incNum + 1);
//     }

//     const dec = () => {
//         updateNum(incNum - 1);
//     }
//     return(
//         <>
//             <div className="main">
//                 <div className="ui_div">
//                     <h1>{incNum}</h1>
//                     <div className="btn_div">
//                         <Button onClick={inc} className="inc_btn"><AddIcon/></Button>
//                         <Button onClick={dec} className="dec_btn"><RemoveIcon/></Button>
//                     </div>
//                 </div>
//             </div>
//         </>   
//     );
    
// };
// export default App;  

