console.log("External JS file successfully loaded!");

const alertBtn = document.querySelector('#alertButton');
// 1. Click Event
alertBtn.addEventListener('click', (event) => {
    alert('Button was clicked!');
});

alertBtn.addEventListener('mouseenter', () => {
    alertBtn.style.backgroundColor = '#4df09e';
});

alertBtn.addEventListener('mouseleave', () => {
    alertBtn.style.backgroundColor = '#dbdbdb';
});