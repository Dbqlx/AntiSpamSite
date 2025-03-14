// Create snowflakes with a simple random generator
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Snowflake symbol
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);
    }
}

// Initialize snowflakes
createSnowflakes();
