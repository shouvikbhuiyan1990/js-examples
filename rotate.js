function rotate( arr,rt ){
    var tempArr = [];
    for( var i=0; i<rt ;i++ ){
        tempArr.push(arr.shift());
        while(tempArr.length!=0){
            arr.push(tempArr[0]);
            tempArr.pop();
        }
    }
    return arr;
}

var array = [1,2,3,4,5,6,7];
rotate( array,2 );

//http://www.geeksforgeeks.org/array-rotation/