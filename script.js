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
