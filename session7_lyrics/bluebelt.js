var array = [2,5,7,8,9,10,0,-2,-10,-5];

function filteringEven(arr){
   var result = arr.filter(n => n % 2 == 0);
   return result;
};

function addingList(arr){
    function add(a, b) {
        return a + b;
    }
    var total = arr.reduce(add,0);
    return total;
};

function logArray(arr){
    arr.forEach(n => {console.log(n)});
};

function squareArray(arr) {
    var sqr = arr.map(x => x * x);
    return sqr;
};

