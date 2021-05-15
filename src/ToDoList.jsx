import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './ListCom'


const ToDoList = () => {

    const [item, setItem] = useState("");
    const [getItem, setNewItem] = useState([]);

    const itemtEvent = (e) => {
        setItem(e.target.value);
    }

    const clickBTn = () => {
        setNewItem((preValue) => {
            return[...preValue, item]
        })
        setItem("");
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>TO DO List</h1>
                    <br/>
                    <input type="text" placeholder="Enter item" onChange={itemtEvent} value={item}/>
                    <Button className="newBtn" onClick={clickBTn}>
                    <AddIcon/ >
                    </Button>
                    <br/>
                    <ol>
                        {getItem.map((val) => {
                          return <List text={val}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDoList;