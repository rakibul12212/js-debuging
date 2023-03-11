function a() {
    console.log('first');
    b();
    console.log('twelveth');
}

function b() {
    console.log('second');
    c();
    console.log('eleventh');
}

function c() {
    console.log('third');
    d()
    console.log('tenth');
}

function d() {
    console.log('fourth');
    e()
    console.log('nineth');
}

function e() {
    console.log('fifth');
    f()
    console.log('eighth');
}

function f() {
    console.log('sixth');
    console.log('seventh');
}
setTimeout(() => {
    console.log('inside timeout');
}, 2000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
a();
e();