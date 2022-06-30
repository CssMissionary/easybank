const hamBurger = document.querySelector('.hamburger');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal-container');

hamBurger.addEventListener('click', () => {
    hamBurger.classList.add('close')
    closeModal.classList.add('open')
    modalContainer.classList.add('open')
});
closeModal.addEventListener('click', () => {
    hamBurger.classList.remove('close')
    closeModal.classList.remove('open')
    modalContainer.classList.remove('open')
});