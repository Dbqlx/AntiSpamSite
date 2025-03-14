document.getElementById('verify-btn').addEventListener('click', function() {
    let button = this;
    button.innerHTML = 'טוען...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '✔ אימות הושלם בהצלחה! תחזרו לשרת';
        button.style.backgroundColor = '#218838';

        // Simulating role assignment request
        fetch('YOUR_SERVER_API_ENDPOINT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'USER_ID_TO_ASSIGN_ROLE' })
        }).then(response => {
            if (response.ok) {
                console.log('Role assigned successfully');
            } else {
                console.error('Failed to assign role');
            }
        }).catch(error => console.error('Error:', error));
    }, 2000);
});

// Snowfall effect
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];
for (let i = 0; i < 100; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 1
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();

    snowflakes.forEach(flake => {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });

    ctx.fill();
    moveSnow();
}

function moveSnow() {
    snowflakes.forEach(flake => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}

function animateSnow() {
    drawSnow();
    requestAnimationFrame(animateSnow);
}

animateSnow();
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
