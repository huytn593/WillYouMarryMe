document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const noBtnWrapper = document.querySelector('.no-btn-wrapper');
    const proposalContent = document.getElementById('proposal-content');
    const celebrationContent = document.getElementById('celebration-content');

    // Button dimensions (approximate) to prevent button from going off-screen too easily
    const btnWidth = 100;
    const btnHeight = 50;

    // Runaway Logic for "No" Button
    // We move the wrapper or the button itself. 
    // To make it easier, let's make the NO button absolute when it starts moving.

    let isRunning = false;

    function moveButton() {
        if (!isRunning) {
            noBtn.style.position = 'fixed'; // Change to fixed to move freely relative to viewport
            isRunning = true;
        }

        // Calculate available viewport area with padding
        const maxX = window.innerWidth - btnWidth - 20;
        const maxY = window.innerHeight - btnHeight - 20;
        const minX = 20;
        const minY = 20;

        const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';


    }

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // In case they manage to click it
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent click on mobile
        moveButton();
    });

    // Celebration Logic for "Yes" Button
    yesBtn.addEventListener('click', () => {
        proposalContent.style.display = 'none';
        celebrationContent.classList.remove('hidden');
    });
});
