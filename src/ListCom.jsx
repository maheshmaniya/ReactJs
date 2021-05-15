import React, {useState} from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const List = (props) =>{

const [set, newSet] = useState(false);

    const click = () =>{
        newSet(true);
    };

    return(
        <>
            <div className="todo_style">
                <span onClick={click}>
                    <DeleteForeverIcon className="deleteIcon"/>
                  </span>
                <li style={{textDecoration: set ? "line-through" : "none"}}>{props.text}</li>
                
            </div>
        </>
    )
}
export default List;