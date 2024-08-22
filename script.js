document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Zabránit výchozímu odeslání formuláře

    // Získání emailové adresy
    const email = document.getElementById('email').value.trim();

    if (email) {
        // Rozdělení na uživatelské jméno a doménu
        const userName = email.substring(0, email.indexOf('@'));
        const domainName = email.substring(email.indexOf('@') + 1);

        // Zobrazení výsledku
        document.getElementById('userName').textContent = `Username: ${userName}`;
        document.getElementById('domainName').textContent = `Domain: ${domainName}`;
    } else {
        document.getElementById('userName').textContent = "";
        document.getElementById('domainName').textContent = "Please enter a valid email address.";
    }
});
