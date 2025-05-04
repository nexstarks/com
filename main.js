// Initialize Lucide icons
lucide.createIcons();

// Handle header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    contactForm.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="color: #059669; font-size: 2rem; margin-bottom: 1rem;">
                <i data-lucide="check-circle"></i>
            </div>
            <h3 style="color: #059669; margin-bottom: 0.5rem;">Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you shortly.</p>
        </div>
    `;
    lucide.createIcons();
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();