var birthDate = document.querySelector("#birth-date")
var luckyNo = document.querySelector("#lucky-number")
var checkButton = document.querySelector("#chck-btn")
var output = document.querySelector("#message")


function calculateSum(date){
    let sum=0
    var newDate = date.replaceAll("-","") 
    for (var element of newDate) {
        element = Number(element)
        sum = sum+element
      }
      return sum
}
function checkLucky(sum,number)
{
    if(sum%number === 0)
    {
        output.innerHTML = "Youe Birth date is lucky"

    }else{
    output.innerHTML = "Youe Birth date is not lucky"
    }

}

function validateNumber()
{  
    var date = birthDate.value
    var number = luckyNo.value
    var sum = calculateSum(date)
    checkLucky(sum,number)
}
checkButton.addEventListener("click",validateNumber)
