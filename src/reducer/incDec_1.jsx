const initialState = 10;
const incDecNum = (state = initialState , action) => {
    switch(action.type){
        case "INCNUM" : return state + action.payload;
        case "DECNUM" : return state - 1;
        default: return state;
    }
}

export default incDecNum;