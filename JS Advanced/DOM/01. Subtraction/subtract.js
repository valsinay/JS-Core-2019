function subtract() {
 
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = document.getElementById('result');
    let finalResult = Number(firstNumber-secondNumber);
    result.textContent = finalResult;
}