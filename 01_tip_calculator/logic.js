let bill = document.getElementById("bill_amount")
let tip = document.getElementById("tip")


const calculate = document.getElementById('cal')

compute = function(){
    let bill = document.getElementById("bill_amount").value
    bill = parseInt(bill)
    let tip = document.getElementById("tip").value
    tip = parseInt(tip)
    total = bill + (tip * bill)/100

    const ta = document.querySelector('span')
    ta.innerHTML = `Total: ${total}`
}

calculate.addEventListener("click", compute);


document.addEventListener("keypress", function(event){
    var name = event.key;
    if(name == "Enter"){
        compute()      
    }
})