let button = document.getElementById('clickme');

let hexSymbols = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let buttonContainer = document.getElementsByClassName('button-container')[0]; 

let counter =0;

button.onclick = function() {
    document.getElementById('clickme').innerHTML= 'Changing Color...';
    let color = `#${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}`; 
    buttonContainer.style.backgroundColor = color;
    document.getElementById('clickme').innerHTML= 'Click Me!';
    counter++; 
    document.getElementById('click-counter').innerHTML = counter;
};



