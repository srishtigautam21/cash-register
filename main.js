var billamount=document.querySelector("#bill-amount");
var cashamount=document.querySelector("#cash-amount");
var btncheck=document.querySelector("#check-button");
var message=document.querySelector("#error-message");
var numofNotes=document.querySelectorAll(".no-Of-Notes");

var availableNotes=[2000,500,100,20,10,5,1];

btncheck.addEventListener("click",function validbillamount()
{
    hidemsg();
    if(billamount.value>0)
    {
        console.log("clicked");
        if(cashamount.value>=billamount.value)
        {
            var amountTobeReturned=cashamount.value-billamount.value;
            calculateCashTobeReturned(amountTobeReturned);
        }
        else{
            message.style.display="block";
            message.innerText="The cash provided should be greater or equal to bill Amount";
            }
    }
    else{
        message.innerText="Enter a valid bill amount";
        message.style.display="block";
    }
   
    
});

function hidemsg()
{
    message.style.display="none";
}
function calculateCashTobeReturned(amountTobeReturned)
 {
     for(let i=0;i<availableNotes.length;i++)
     {
         var numberofnotes=Math.trunc(amountTobeReturned/availableNotes[i]);
         amountTobeReturned%=availableNotes[i];
         numofNotes[i].innerText=numberofnotes;
    }


 }