var principal = 0;
var interestRate = 0;
var termofloan = 0;
var interest = 0;
var amount = 0;

let buttonClick = document.getElementById("button");

//  buttonClick.addEventListener('click', function(){
    

//         interestRate = interestRate / 100;
//         interest = principal * interestRate * termofloan;
//         amount = (principal + interest).toFixed(2);

//         document.getElementById("ResultInterest").innerHTML =
//         "Total interest : $" + interest.toFixed(2);
//         document.getElementsById("finalAmount").innerHTML = "Total plus interest : $" + principal + " + " + interest + " = " + amount;     
//  })
    
    function changePrincipal(Number){
        principal = Number
    
    }
    function changeInterest(Number){
        interestRate = Number
    
    }
    function changeYears(Number){
        termofloan = Number
    
    }
     function changesubmit(){
     
    //    start 
    const simpleInterest = (principal*interestRate*termofloan) /100;
    const totalAmount = parseInt(principal) + parseInt(simpleInterest);
// console.log(totalAmount)
         console.log(principal,interestRate,termofloan,totalAmount)
         const resultElement = document.getElementById("finalAmount");
         resultElement.innerHTML = `Total Amount: ${totalAmount.toFixed(2)}<br>`
         const interestElement = document.getElementById("ResultInterest");
         interestElement.innerHTML = `Simple Interest: ${simpleInterest.toFixed(2)}<br>` 
    //    end
    

   
    
    

     }