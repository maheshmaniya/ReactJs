import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import App from './App';
import ToDoList from './ToDoList';
import Context from './UseContext';
import Effect from './UseEffect';
import ComApi from './Api';
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

// ReactDOM.render(<App />, document.getElementById("root"));

// 4. to do List

// ReactDOM.render(<ToDoList />, document.getElementById("root"));

// 5. createContext and useContext..

// ReactDOM.render(<Context/>, document.getElementById("root"));

// 6. useeffect hooks

// ReactDOM.render(<Effect/>, document.getElementById("root"));

// 7. api throgh getData

// ReactDOM.render(<ComApi />, document.getElementById("root"));

// 8. routing in React

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    , document.getElementById("root"));

