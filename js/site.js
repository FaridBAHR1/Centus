//get values from interface - controller/start
function getValues(){
    //get value from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers - needed to validate input
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
    }
    else{
        alert("Please enter an Integer");
    }

    //call displayNumbers
    displayNumbers(numbers);
}

//generate numbers from start to endvalue - model/logic
function generateNumbers(startValue, endValue){
    let numbers = [];
    
    //get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        //execute loop until index = endValue
        numbers.push(index);
    }
    return numbers;
}

//display bold numbers - view/display
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;  
    };
}