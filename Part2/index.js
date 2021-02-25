console.log('The house always wins!')

let inputColor = document.getElementById('inputColor');
let inputId = document.getElementById('inputId');

console.log(inputId);
console.log(inputColor);

function setCard(){
    const card = document.getElementById(inputId.value);
    card.style.color = inputColor.value;
    console.log(card)
}

function resetCards(){
    location.reload()
}