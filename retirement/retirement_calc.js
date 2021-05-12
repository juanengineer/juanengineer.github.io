function showCalculateButton(){
    //document.querySelectorAll("button")[0].classList.toggle("invisible"); //example from lesson. play in console
    //html: First name: <input type="text" id="fname" onfocus="myFunction(this.id)"><br>
    //JS: function myFunction(x) {
    //   document.getElementById(x).style.background = "yellow";
    // }
    document.querySelector("#calculateAllocations").classList.remove("invisible"); //example from lesson. play in console
}


function stockAllocations(){
    var userAge = document.querySelector("#ageEntryField").value;
    document.querySelector("#bondAlloc").innerHTML=userAge; //Bond allocation equal to age
    document.querySelector("#stockAlloc").innerHTML=100-5-userAge; //Stock alloc is 100 - age
}

function savingsByAge(){
    var userSalary = document.querySelector("#salaryEntryField").value;
    var savingsTableLength = document.querySelectorAll("#rowAge td").length
    for(var i=0; i<savingsTableLength; i++){
        if (i===0){
            continue;
        }
        else{
            document.querySelectorAll("#rowSavings td")[i].innerHTML= userSalary*(i); //separate selector children by spaces
        }
    }
}
//document.getElementById("bondAlloc").innerHTML = "test";