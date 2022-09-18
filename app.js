var birthDate = document.querySelector("#birth-date")
var luckyNo = document.querySelector("#lucky-number")
var checkButton = document.querySelector("#chck-btn")


function calculateSum(date){
    let sum=0
    var newDate = date.replaceAll("-","") 
    for (var element of newDate) {
        element = Number(element)
        sum = sum+element
     
      }
      return sum
}

function validateNumber()
{  
    var date = birthDate.value
    var sum = calculateSum(date)
}
checkButton.addEventListener("click",validateNumber)
