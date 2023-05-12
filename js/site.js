//get values from interface - controller/start
function getValues(){
    //get value from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //call generateNumbers
    let numbers = generateNumbers(startValue, endValue);

    //call displayNumbers
    ;
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
function displayNumbers(){
    ;
}