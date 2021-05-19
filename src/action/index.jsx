export const incNum = (num) => {
    return{
        type: "INCNUM",
        payload: num
    }
}

export const decNum = () => {
    return {
        type: "DECNUM"
    }
}

export const divNum = () => {
    return {
        type: "DIVNUM"
    }
}

export const mulNum = (num) => {
    return {
        type: "MULNUM",
        payload: num
    }
}