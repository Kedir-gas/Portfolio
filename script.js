// Common Functions
const initMobileMenu = () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
};



const initStickyHeader = () => {
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('sticky', window.scrollY > 0);
        });
    }
};

const initContactForm = () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will respond soon.');
            this.reset();
            
            document.querySelectorAll('.form-group label').forEach(label => {
                label.style.top = '15px';
                label.style.left = '15px';
                label.style.fontSize = '16px';
                label.style.color = '#777';
            });
        });
    }
};

                            //initializing 
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTypedJS();
    initStickyHeader();
    initContactForm();
});