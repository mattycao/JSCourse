function fn1() {
    console.log(1);
}

function fn2() {
    console.log(2);
}

fn3 = fn2.call;
fn2.call(fn1);
fn3.call(fn1);