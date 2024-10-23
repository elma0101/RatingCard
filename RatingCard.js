
function SubmitValue(){
    window.location.href = "ThankYou.html"; 
}

function DisplaySelectedNumber(){
    var numberr=localStorage.getItem("number");
    console.log(numberr);
    document.querySelector("#changedText").textContent = "You selected "+ numberr + " out of 5 ";

}