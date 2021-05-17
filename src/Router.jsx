import React from 'react';
import {Route , Switch, Redirect} from 'react-router-dom';
import About from './RouterComA';
import Index from './RouterComB';
import Api from './Api';
import Menu from './NavBar';
import ToDoList from './ToDoList';
import Search from './Search'
// import { f_name } from './UseContext';

const Router = () => {

    const f_name = () => {
        return(
            <h1>my name is mack</h1>
        )
    }

    const error = () => {
        return(
            <h1>opps! Page not found</h1>
        )
    }
    return(
        <>
        <Menu/>
        <div style={{backgroundColor: "lightblue"}}>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/about/:data/:userName' component={About} />
                    <Route exact path='/about' component={About} />
                    <Route path='/name' component={f_name} />
                    <Route path='/api' component={Api} />
                    <Route path='/todolist' component={ToDoList} />
                    <Route path='/search' component={Search} />
                    {/* <Route component={error}/> */}
                    <Redirect to="/" />
                </Switch>
        </div>
        
        </>
    )
}

export default Router;