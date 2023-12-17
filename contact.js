function validateForm() {
    // Récupération des valeurs des champs
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var cin = document.getElementById("cin").value;

    // Validation du numéro de CIN (8 chiffres maximum)
    if (cin.length > 8) {
        alert("Le numéro de CIN ne doit pas dépasser 8 chiffres.");
        return false;
    }

    // Validation du champ du nom (pas de chiffres)
    if (/[\d]/.test(nom)) {
        alert("Le champ du nom ne doit pas contenir de chiffres.");
        return false;
    }

    // Validation du champ du prénom (pas de chiffres)
    if (/[\d]/.test(prenom)) {
        alert("Le champ du prénom ne doit pas contenir de chiffres.");
        return false;
    }

    // Si toutes les validations passent, le formulaire est soumis
    return true;
}
