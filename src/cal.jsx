

function add(a, b) {
    let c = a + b;
    return c;
}

function mul(a, b) {
    let c = a * b;
    return c;
}

function div(a, b) {
    let c = b/a;
    c = c.toFixed(2);
    return c;
}

function less(a, b) {
    let c = b - a;
    return c;
}

export {add, mul, div, less};