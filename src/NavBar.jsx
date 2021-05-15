import {NavLink} from 'react-router-dom';

const Menu = () => {
    return(
        <>
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/about">
            ABout US
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/name">Name</NavLink>
            <NavLink exact activeClassName="active_class" to="/api">APi</NavLink>
            <NavLink exact activeClassName="active_class" to="/todolist">ToDoList</NavLink>
            <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
        </div>
        </>
    )
}

export default Menu;
