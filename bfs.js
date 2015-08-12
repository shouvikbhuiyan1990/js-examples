function bst(){
    this._root = null;
}

bst.prototype = {
    constructor : bst,
    create : function(value){
        var node = {
            value : value,
            left : null,
            right : null
        };
        var current = this._root;
        while(true){
            if(this._root == null){
                this._root = node;
                break;
            }
            else{
                if(value < current.value){
                    if(current.left == null){
                        current.left = node;
                        break;
                    }
                    else{
                        current = current.left;
                    }
                }
                else if(value > current.value){
                    if(current.right == null){
                        current.right = node;
                        break;
                    }
                    else{
                        current = current.right;
                    }
                }
            }
        }

        //console.log(this);
    },
    printLeft : function(){
        var current = this._root;
        var arr = [];
        //arr.push(current.left.value);
        while(current.left){
            arr.push(current.left.value)
            current = current.left;
        }
        console.log(arr);
    },
    printRight : function(){
        var current = this._root;
        var arr = [];
        //arr.push(current.right.value);
        while(current.right){
            arr.push(current.right.value)
            current = current.right;
        }
        console.log(arr);
    }
}

var bs = new bst();

bs.create(5);
bs.create(6);
bs.create(2);
bs.create(7);
bs.create(9);
bs.create(1);
bs.create(0);
bs.create(10);
bs.create(11);

bs.printLeft();
bs.printRight();