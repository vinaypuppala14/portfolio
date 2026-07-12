document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Shaking Click Logic for the Know More Button
    const knowMoreBtn = document.getElementById('know-more-btn');
    
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener('click', (e) => {
            // Prevent instant navigation so the user sees the shake effect first
            e.preventDefault(); 
            
            // Add the CSS shake animation class
            knowMoreBtn.classList.add('shake-animation');
            
            // Wait for animation to finish, then go to background page
            setTimeout(() => {
                knowMoreBtn.classList.remove('shake-animation');
                window.location.href = knowMoreBtn.getAttribute('href');
            }, 400); 
        });
    }

    // 2. Simple slow floating entry for skill nodes
    const skillNodes = document.querySelectorAll('.skill-node');
    skillNodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.transition = 'all 0.5s ease-out';
        setTimeout(() => {
            node.style.opacity = '1';
        }, 600 + (index * 100)); // Starts right after text slides in
    });
});