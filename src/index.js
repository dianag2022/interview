function sum(a) {
    if (a instanceof Function) {
        return a(0)
    }
    let result = a ? a : 0;
    return function (b) {
        if (b) {
            if (!(b instanceof Function)) {
                return sum(a + b);
            }
            if (b instanceof Function) {
                return b(a);
            }
        }
        //console.log('resultado',a(result));
    }
}

module.exports = sum;
/*
sum(result => { console.log('->', result) })
sum(1)(result => { console.log('->', result) });
sum(1)(2)(result => { console.log('->', result) });
sum(1)(2)(4)(result => { console.log('->', result) });

*/
/*SAME FUNCTION TO TASK 2 */
//sum(1)(2)(3)(4)(5)(6)(result => { console.log('->', result) });