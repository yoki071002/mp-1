function addition(){
    let first=document.getElementById("first-number").value;
    first = Number(first);

    let second=document.getElementById("second-number").value;
    second = Number(second);

    let sum=first + second;
    document.getElementById("output").innerHTML=sum;

    if (sum < 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
}

function subtraction(){
    let first=document.getElementById("first-number").value;
    first = Number(first);

    let second=document.getElementById("second-number").value;
    second = Number(second);

    let dif=first - second;
    document.getElementById("output").innerHTML=dif;

    if (dif < 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
}

function multiplication(){
    let first=document.getElementById("first-number").value;
    first = Number(first);

    let second=document.getElementById("second-number").value;
    second = Number(second);

    let product=first * second;
    document.getElementById("output").innerHTML=product;

    if (product < 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
}

function division(){
    let first=document.getElementById("first-number").value;
    first = Number(first);

    let second=document.getElementById("second-number").value;
    second = Number(second);

    let quotient=first / second;
    document.getElementById("output").innerHTML=quotient;

    if (quotient < 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
}

function power(){
    let first=document.getElementById("first-number").value;
    first = Number(first);

    let second=document.getElementById("second-number").value;
    second = Number(second);

    let start=1;
    for(let i=0;i<second;i++){
        start=first*start;
    }
    document.getElementById("output").innerHTML=start;

    if (start < 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
}

function clearr(){
    document.getElementById("first-number").value= "";
    document.getElementById("second-number").value= "";
    document.getElementById("output").innerHTML="";
}