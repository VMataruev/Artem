var test = 0;
const my_prompt = () => {
    test = prompt("Введите текст");
    const myPlace = document.querySelector('#myPlace').textContent = test;
};



const button1 = document.querySelector('#prompt_button');

button1.addEventListener('click', my_prompt);