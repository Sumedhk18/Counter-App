const countElement = document.querySelector('#value');
const incrementBtn =document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const decrementBtn = document.querySelector('#decrement');

let count = 0;

incrementBtn.addEventListener('click', function(){
    count++;
    console.log(count);
    countElement.textContent = count;
});

resetBtn.addEventListener('click', function(){
    count = 0;
    countElement.textContent = count;
})

decrementBtn.addEventListener('click', function(){
    count--;
    countElement.textContent = count;
})
