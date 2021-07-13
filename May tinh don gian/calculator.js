function nhapdl(value){
    remove0();
    document.getElementById("display").innerHTML += value;
}
function tinhtoan(){
    let a = eval(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = a;
}
function forclear(){
    document.getElementById("display").innerHTML = "0";
}
function remove0(){
    let b = document.getElementById("display").innerHTML
    if (b == "0") {
        b = ''
        document.getElementById("display").innerHTML = b;
    }
}