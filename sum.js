function sum(a){
    let result = a ? a : 0;
    return function(b){
        if(! (b instanceof Function)){
            return sum(a+b);
        }
        return b(a);
    }
}

sum(1)(result => { console.log('->', result)});
sum(1)(2)(result => { console.log('->', result)});
sum(1)(2)(4)(result => { console.log('->', result)});