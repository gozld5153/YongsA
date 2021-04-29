const letter = document.querySelector('.yongsa');
const yongsa = letter.textContent;
const array = yongsa.split("");
console.log(array);

letter.innerHTML = "";

for( let i=0; i < array.length; i++){
    letter.innerHTML += "<span>" + array[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 300);

function onTick(){
    const span = letter.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char == array.length){
      document.querySelector('.home').classList.add('fade2');
      document.querySelector('.todo').classList.add('fade3');
      clearInterval(timer);
      timer = null;
    }
}
