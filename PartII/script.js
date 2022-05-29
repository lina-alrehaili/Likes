var like1=0;
var like2=0;
var like3=0;

function addLike(num){
    if(num==1){
        like1++;
        document.getElementById("like1").innerHTML=like1;
    }
    if(num==2){
        like2++;
        document.getElementById("like2").innerHTML=like2;
    }
    if(num==3){
        like3++;
        document.getElementById("like3").innerHTML=like3;
    }
}