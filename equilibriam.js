function eqi( arr ){
    var lsum = 0 , rsum = 0;
    var lc = 0;
    do{
        rsum = 0;
        lsum = lsum + arr[lc];
        for(var j = lc+2; j<arr.length ; j++){
            rsum = rsum + arr[j];
        }
        if(lc == arr.length){
            return 'no equilibrium';
        }
        else if(lsum == rsum){
            return 'equilibrium index is '+ (lc+1);
        }
        lc++;
    }while( (lsum !== rsum) && (rsum!=0 || lsum!=0) );
}

var array = [-7, 1, 5, 2, -4, 3, 0];
eqi( array );
//http://www.geeksforgeeks.org/equilibrium-index-of-an-array/