let a = 5; //global variable context

function add(num1, num2) {
    const result = num1 + num2 + a; //functional variable context
    return result;
}
const sum = add(4, 5)
console.log(sum)