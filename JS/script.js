const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('.modalTitle');
const closeBtn = document.querySelector('.close');
const modalImage = document.querySelector('#modalImage');
const modalDesc = document.querySelector('.modalDescr');

// Get the item elements:
const items = document.querySelectorAll('.item');

// Open Modal and populate it with details: 
const openModal = (title, description, imageSrc) => {
modal.style.display = "block";
modalTitle.innerText = title
modalDesc.innerText = description
modalImage.src = imageSrc
}

// Close Modal 
const closeModal = () => {
    modal.style.display = "none"
}

// Attach event Listener when clicking on any item:
items.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.querySelector('h2').innerText;
    const description = item.querySelector('p').innerText;
    const imageSrc = item.querySelector('img').src;
    openModal(title, description, imageSrc)
  })
})

// when clicking on close:
closeBtn.addEventListener("click", closeModal)

// closing the modal when clicking outside the modal:
window.addEventListener("click", event =>{
    if(event.target === modal){
        closeModal()
    }
})