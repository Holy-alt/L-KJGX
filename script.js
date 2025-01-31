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

let more = document.querySelectorAll('.more');
console.log('more', more)

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function () {
        console.log('clicked', i)
        main_container.innerHTML = '';
        for (let i = 0; i < more.length; i++) {
            more[i].classList.remove('flip-card:hover');
        }
        more[i].classList.toggle('flip-card:hover');
    })
}
