alert('Привет!');

let btn = document.createElement('button');
btn.innerHTML = '↑ Наверх';
btn.style.position = 'fixed';
btn.style.bottom = '30px';
btn.style.right = '30px';
btn.style.padding = '12px 25px';
btn.style.background = '#60a5fa';
btn.style.color = 'white';
btn.style.border = 'none';
btn.style.borderRadius = '25px';
btn.style.fontSize = '1.1em';
btn.style.cursor = 'pointer';
btn.style.display = 'none';
btn.style.zIndex = '9999';
document.body.appendChild(btn);

window.onscroll = function() {
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

if (burger && nav) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}