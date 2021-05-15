const Img =(props) => {

    const Abc = `https://source.unsplash.com/400x300/?${props.value}`;
    return(
        <>
        <div>
            <img src={Abc}/>
        </div>
        </>
    ); 
};
export default Img;