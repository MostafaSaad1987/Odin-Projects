const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btnListen = document.querySelector("#btnListen");
btnListen.addEventListener("click", () => {
    alert("Hello World");
});

const btnListenn = document.querySelector("#btnListenn");
btnListenn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});