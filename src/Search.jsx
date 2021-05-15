import { useState } from "react";
import Img from './GetImg'

const Search = () => {

    const [img, setImg] = useState('');

    const getImg = (e) => {
        setImg(e.target.value);
    }

    return(
        <>
            <div className='search_bar'>
                <input 
                    type='text'
                    placeholder="Enter Text"
                    onChange={getImg}
                    value={img}
                />
                {img === "" ? null : <Img value={img} />}
            
            </div>
        </>
    )
}

export default Search;