const counter = document.createElement('div');
counter.id = 'counter';
document.body.appendChild(counter);

const h1=document.createElement('h1')
h1.innerHTML='0'
h1.id='number'
counter.appendChild(h1);

const decBtn = document.createElement('button')
decBtn.innerHTML = '-'
decBtn.id = 'decBtn'
counter.appendChild(decBtn);

const resetBtn = document.createElement('button');
resetBtn.innerHTML= 'reset';
resetBtn.id= 'resetBtn'
counter.appendChild(resetBtn)

const incBtn= document.createElement('button');
incBtn.innerHTML='+'
incBtn.id='incBtn'
counter.appendChild(incBtn);


let contatore = 0;

incBtn.addEventListener('click', () => {
    contatore++; 
    document.getElementById('number').innerHTML = contatore;
});

decBtn.addEventListener('click',() =>{
    contatore--;
    document.getElementById('number').innerHTML = contatore;
});

resetBtn.addEventListener("click", () => {
    contatore= 0;
    document.getElementById('number').innerHTML = contatore;
  });