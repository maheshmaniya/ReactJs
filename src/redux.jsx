import React from 'react'
import './redux.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum, divNum, mulNum } from './action/index'

const Redux = () => {
    const myState = useSelector((state) => state.incDecNum); // for getting initial state value
    const myState_2 = useSelector((state) => state.divMulNum);
    console.log(myState_2); // for getting initial state value
    const dispatch = useDispatch(); // for calling ACTION
    return (
        <>
            <div className="main-div">
                <div class="container">
                    <h1>Increment/Decrement counter</h1>
                    <h4>using React and Redux</h4>
                    <div class="quantity">
                        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNum())}><span>-</span></a>
                        <input name="quantity" type="text" class="quantity__input" value={myState} />
                        <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNum(5))}><span>+</span></a>
                    </div>
                </div>
            </div>

            <div className="main-div">
                <div class="container">
                    <h1>Increment/Decrement counter</h1>
                    <h4>using React and Redux</h4>
                    <div class="quantity mt-5">
                        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(divNum())}><span>/</span></a>
                        <input name="quantity" type="text" class="quantity__input" value={myState_2} />
                        <a class="quantity__plus" title="Increment" onClick={() => dispatch(mulNum(5))}><span>*</span></a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Redux;
