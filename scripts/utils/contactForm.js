const closeForm = document.querySelectorAll('.close');
const body = document.querySelector('body');
const openForm = document.querySelector('.contact_button');
const modal = document.querySelector('#contact_modal');
const photographBody = document.querySelector('.photograph-body');
const lightbox = document.querySelector('#lightbox');

//Gestion de la modal
const main = document.querySelector('#main');

function displayModal() {
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('role', 'dialog');
    modal.style.display = 'flex';
}

function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    lightbox.style.display = 'none';
}


const filter = document.querySelector('#filter-select');
const options = document.querySelector('.filter-container');
const chevron = document.querySelector('.chevron > em');

filter.addEventListener('click', function (e) {
    e.preventDefault();
    if (options.classList.contains('hide')) {
        options.classList.remove('hide');
        options.setAttribute('aria-expanded', true);
        chevron.style.transform = 'rotate(180deg)';
    } else {
        options.classList.add('hide');
        options.setAttribute('aria-expanded', false);
        options.style.visibility = 'none';
        chevron.style.transform = 'rotate(0)';
    }
});



openForm.addEventListener('click', displayModal);

closeForm.forEach((close) => close.addEventListener('click', closeModal));

body.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === 'ArrowLeft') {
        prevImage();
    } if (e.key === 'ArrowRight') {
        nextImage();
    }
});


function checkForm() {
    const elements = document.getElementsByName('modal-input');
    const array = Array.from(elements);
    for (let element of array) {
        console.log(element.id + ': ' + element.value);
    }
}



function validateModal() {
    modal.addEventListener('submit', function (e) {
        e.preventDefault();
        checkForm();
        closeModal();
    });
}



