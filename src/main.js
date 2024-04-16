let navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach( (link) => {
    link.addEventListener('click', () => {
        console.log('patata')
        if (link.classList.contains('text-white')) {
            navLinks.forEach( (otherLink) => {
                otherLink.classList.add('text-white')
                otherLink.classList.remove('text-secondary')
            })
            link.classList.add('text-secondary')
            link.classList.remove('text-white')
        }
    })
})