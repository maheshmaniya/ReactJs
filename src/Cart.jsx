import React from "react";

function Cart(props){
    return(
        <>
            <div className= "main">
                <div className="second_div">
                    <img src={props.imgSrc} className="cart_img"/>
                    <div className="under_div">
                        <span className="heading_style">{props.title}</span>
                        <a href={props.link} target="_blank">
                            <button className="btn">Shop Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Cart;