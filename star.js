//right angle triangle 1* from up
/*function star(){
  for(var i=0;i<5;i++){
    var output = "";
    temp = i;
    while(temp!=-1){
      output+= "* "
      temp--;
    }
    console.log(output);
  }
}*/
//right angle triangle 5* from up
/*function star(){
  for(var i=5;i>0;i--){
    var output = "";
    temp = i;
    while(temp!=0){
      output+= "* "
      temp--;
    }
    console.log(output);
  }
}*/

//Triangle By JS
/*function star(){
  var initSpace;
  var row = 20;
  var space = 0;
  for(var i=0;i<row;i++){
    var output = '';
    //var space = 0;      
    if( !initSpace ){
      space = row;
      initSpace = true;
    }
    else{
      space = space - 1;
    }
    temps = space;
    while( temps >= 0 ){
      temps --;
      output += ' ';
    }
    var temp = i;
    while(temp!=-1){
      temp--;
      output += '* ';
    }
    //row = row - 1;
    console.log(output);
  }
  return 'justice served by Shouvik'
}*/

//Reverse Triangle By JS.

function star(){
  var initSpace;
  var row = 20;
  var space = 0;
  for(var i=row;i>0;i--){
    var output = '';
    //var space = 0;      
    if( !initSpace ){
      space = 0;
      initSpace = true;
    }
    else{
      space = space + 1;
    }
    temps = space;
    while( temps >= 0 ){
      temps --;
      output += ' ';
    }
    var temp = i;
    while(temp!=0){
      temp--;
      output += '* ';
    }
    //row = row - 1;
    console.log(output);
  }
  return 'justice served by Shouvik'
}

star();