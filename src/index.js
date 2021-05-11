import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import name, { surName, f_name } from './App';
import * as abc from './App'; // we can access all the jsx from app with help of * and store in abc object

// ReactDOM.render(
//   <>
//     <ol>
//       <li>{name}</li>
//       <li>{surName}</li>
//       <li>{f_name()}</li>
//     </ol>
//   </>,document.getElementById("root")
// );

// 2. using components (calculator App)

// ReactDOM.render(<App />, document.getElementById("root"));


// 3. cart my album

ReactDOM.render(<App />, document.getElementById("root"));