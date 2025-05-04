// Features and functionality implementation for RCB Fan Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Team Page Category Filtering
    const categoryButtons = document.querySelectorAll('.team-category');
    const playerCards = document.querySelectorAll('.player-bento-card');

    if (categoryButtons.length > 0 && playerCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const category = this.getAttribute('data-category');
                
                playerCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Stats Page Tab Switching
    const statsTabs = document.querySelectorAll('.stats-tab');
    const statsPanels = document.querySelectorAll('.stats-panel');

    if (statsTabs.length > 0 && statsPanels.length > 0) {
        statsTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                statsTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');

                const panelId = this.getAttribute('data-tab');
                
                statsPanels.forEach(panel => {
                    if (panel.id === panelId) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }

    // View Profile Buttons
    const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const playerCard = this.closest('.player-bento-card');
            const playerName = playerCard.querySelector('.player-name').textContent;
            alert(`Player profile for ${playerName} will be available soon!`);
        });
    });

    // Social Media Links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('data-platform');
            alert(`RCB's ${platform} page will open in a new tab!`);
            window.open(this.href, '_blank');
        });
    });

    // Gallery Image Modal
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');

    if (galleryImages.length > 0 && modal && modalImg && modalCaption && closeBtn) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
                modalCaption.textContent = this.alt;
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
            
            // Validate name
            if (!name.value.trim()) {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validate subject
            if (!subject.value.trim()) {
                document.getElementById('subjectError').textContent = 'Subject is required';
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                document.getElementById('messageError').textContent = 'Message is required';
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                const successMessage = document.getElementById('formSuccess');
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                successMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Ticket Booking Buttons
    const bookTicketButtons = document.querySelectorAll('.book-ticket-btn');
    bookTicketButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const matchCard = this.closest('.match-card');
            const teams = matchCard.querySelector('.match-teams').textContent;
            alert(`Ticket booking for ${teams} will be available soon!`);
        });
    });

    // Add CSS for modal
    const modalStyles = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .modal-content {
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modal-close {
        position: absolute;
        right: 25px;
        top: 15px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
    }

    #modalCaption {
        margin: auto;
        display: block;
        width: 80%;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 150px;
    }

    .error-message {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    }

    .success-message {
        display: none;
        color: #28a745;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.25rem;
    }

    .stats-panel {
        display: none;
    }

    .stats-panel.active {
        display: block;
    }

    .team-category {
        cursor: pointer;
        padding: 0.5rem 1rem;
        border: none;
        background: none;
        color: #666;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .team-category.active {
        color: #ec1c24;
        border-bottom: 2px solid #ec1c24;
    }

    .player-bento-card {
        transition: all 0.3s ease;
    }

    .player-bento-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    `;

    // Add styles to document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.news-card, .player-card, .match-card, .bento-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();
}); 