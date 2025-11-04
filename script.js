console.log("laboratoir prêt !")
const nom = "Nathan";
let age = 18;
//nom = "bonnamour"
//Uncaught SyntaxError: Numeric separators are not allowed at the end of numeric literals
console.log(age)

const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "bonjour123"; // Changez cette valeur pour tester

if ( motDePasseAttendu === motDePasseUtilisateur ) {
    console.log("Accès autorisé. Bienvenue !");
} else if ( motDePasseUtilisateur.length< 9) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}
