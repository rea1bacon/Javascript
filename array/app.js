var array = new Array (4,8,10,3,1,9,5);

function order(arr){
    var supfive = [];
    var inffive = [];
    var five = [];
    for(var i in array){
        if(array[i]>5){
            supfive.push(array[i]);
        }
        else if(array[i]<5){
            inffive.push(array[i]);
        }
        else{
            five.push(array[i]);
        }
    }
    return ">5 : " + supfive + "/ <5 :" + inffive +"/ =5 : "+ five;
}

console.info(order(array));