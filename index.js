function map(array, callback){
    let a = [];
    for(let i=0;i<array.length;i++){
        a.push(callback(array[i]));
    }
    return a;
}

function reduce(array, callback, starting=0){

    let r = (!!starting) ? starting : array[0];
    let i = (!!starting) ? 0 : 1;

    for (i; i<array.length; i++){
        r = callback(array[i], r)
    }
    return r;
}