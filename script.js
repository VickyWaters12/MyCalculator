const display = document.getElementById('display');


function appendToDisplay(input){
     display.value += input;
}

function clearDisplay(){
   display.value = ""; 
}

function calculate(){
   try{
    display.value = eval(display.value);
   }
   catch{
    display.value = "Error"
   }
}

function del(){
   const display=document.getElementById('display')
   const currentValue = display.value;
   if (currentValue !=='') {
     const newValue = currentValue.slice(0, -1);
     display.value=newValue
   }
}
