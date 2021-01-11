const numbers = [1,2,3,8,5,6,1];
const persons = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

// =============== FOREACH METHOD=================

function customForeach(arrIn, fn){
    for(let i = 0; i < arrIn.length; i++){
        fn();
    }
}

// =============== FILTER METHOD=================

function customFilter(arrIn, fn){
    let out = [];
    for(let i = 0; i < arrIn.length; i++){
        if(fn(arrIn[i])){
            out.push(arrayIn[i]);
        }   
    }
    return out;
}

// =============== MAP METHOD=================

function customMap(arrayIn, fn){
    let out = [];
    for(let i=0; i<arrayIn.length; i++){
        out.push(fn(arrayIn[i]));
    }
    return out;
}

// =============== FIND METHOD=================

function customFind(fn, arrrayIn){
    for(let i = 0; i<arrrayIn.length; i++){
        if(fn(arrrayIn[i])){
            return  arrrayIn[i];
        }
    }
}

// =============== FINDINDEX METHOD=================

function customFindIndex(fn, arrrayIn){
    for(let i = 0; i<arrrayIn.length; i++){
        if(fn(arrrayIn[i])){
            return  i;
        }
    }
    return -1; 
}

// =============== CONTAINS METHOD=================

function customContains(list, value, fromIndex = 0){
    for(let i = fromIndex; i<list.length; i++){
           if(list[i] === value){
            return true;
           }   
    }
    return false;
}

// =============== PLUCK METHOD=================


function customPluck(obj, propName){
    let out = [];
    for(let i = 0; i<obj.length; i++){
        let data = obj[i][propName];
        out.push(obj[i][propName]);
    }
    return out;
}

// =============== WITHOUT METHOD=================


function customWhithout(array, ...args){
    for(let i = 0; i<args.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j]===args[i]){
                array.splice(j,1);
                j=j-1;
            }
        }
    }
    return array;
}

