function fn1() {
    alert(1);
}

function fn2() {
    alert(2);
}

fn3 = fn2.call;
fn2.call(fn1);
fn3.call(fn1);