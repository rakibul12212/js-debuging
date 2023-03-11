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
a();
e();