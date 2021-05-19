const initialState = 10;
const divMulNum = (state = initialState, action) => {
    switch (action.type) {
        case "DIVNUM": return state / 5;
        case "MULNUM": return state * action.payload;
        default: return state;
    }
}

export default divMulNum;