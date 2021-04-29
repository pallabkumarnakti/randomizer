var list = [];
var plist = "";
var warn = document.getElementById("warn");


function enlist() {
    var inputval = document.getElementById("input").value;
    if (inputval == "" || inputval == " ") {
        warn.innerHTML = "Enter a valid input";
    } else {
        list.push(inputval);
        warn.innerText = "";
    }
    document.getElementById("list").innerText = list;
    document.getElementById("input").value = "";
}

function clearall() {
    list = [];
    document.getElementById("list").innerText = list;
}

function clear1() {
    var lastitem = list.length - 1;
    list.pop(lastitem);
    document.getElementById("list").innerText = list;
}

function randomize() {
   if(list.length==0||list.length==1){
        document.getElementById("warn2").innerText="Not enough items in the list";
   }else{
       let x= Math.floor((Math.random() * list.length) -0);
       console.log(x);
    document.getElementById("randomtext").innerText=list[x];
    document.getElementById("warn2").innerText="";
   }
}
function onetoh() {
    i=0;list=[];
    while(i<=999){
        
        i++;
        list.push(i);
        document.getElementById("list").innerText = list;
    }
}