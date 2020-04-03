//store elements in variables
learnmorebutton = document.getElementById('learnmorebutton');
textbox1 = document.getElementById('num1');
textbox2 = document.getElementById('num2');
resultbox = document.getElementById('result');

//do the math

function doMath() {
    
    resultbox.innerHTML = (parseInt(textbox1.value) + parseInt(textbox2.value));

    result = num1 + num2;
    resultbox.innerhtml = result;
}