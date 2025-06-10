function toggleFAQ(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    
    // Close all other FAQs
    for (let i = 0; i < 4; i++) {
        if (i !== index) {
            const otherAnswer = document.getElementById(`answer-${i}`);
            const otherIcon = document.getElementById(`icon-${i}`);
            otherAnswer.classList.remove('active');
            otherIcon.classList.remove('active');
            otherIcon.textContent = '+';
        }
    }
    
    // Toggle current FAQ
    answer.classList.toggle('active');
    icon.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.textContent = '−';
    } else {
        icon.textContent = '+';
    }
}

// Add smooth scroll behavior and enhanced animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize first FAQ as open
    const firstAnswer = document.getElementById('answer-0');
    const firstIcon = document.getElementById('icon-0');
    firstAnswer.classList.add('active');
    firstIcon.classList.add('active');
    firstIcon.textContent = '−';
    
    // Add hover effects to FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add subtle parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const flowingLines = document.querySelector('.flowing-lines');
        if (flowingLines) {
            flowingLines.style.transform = `translateY(${rate}px)`;
        }
    });
});