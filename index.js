document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    // Getting the user's email address
    const email = document.getElementById('email').value.trim();

    if (email) {
        // Splitting the user name
        const userName = email.substring(0, email.indexOf('@'));

        // Splitting the domain name
        const domainName = email.substring(email.indexOf('@') + 1);

        // Message format
        const res = `Your username is '${userName}' and your domain name is '${domainName}'`;

        // Displaying the message result
        document.getElementById('result').textContent = res;
    } else {
        document.getElementById('result').textContent = "Please enter a valid email address.";
    }
});
