document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    const cards = document.querySelectorAll('.card');

   
});

more_btn = document.querySelectorAll('.more');
console.log('more_btn', more_btn)
container = document.querySelectorAll('.class_toogle');
cancel = document.querySelectorAll('.cancel');

for (let i = 0; i < more_btn.length; i++) {
    more_btn[i].addEventListener('click', function () {
        console.log('clicked', i)
        container[i].classList.toggle('flip-card');
    })
}


for (let i = 0; i < cancel.length; i++) {
    cancel[i].addEventListener('click', function () {
        console.log('clicked', i)
        container[i].classList.toggle('flip-card');
    })
}

