// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a,b){
    return a / b ;
}
function mul(a,b){
    return a*b;
}
module.exports = { add, sub , div, mul };
