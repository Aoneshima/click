var counter = 0;

function onClickEgg(name){
    counter++;
    const element = document.getElementById('meaning');
    element.textContent = counter;
}