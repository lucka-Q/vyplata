document.body.innerHTML += "<h2>Výplata</h2>"

const hodinovaSazba = Number(prompt ("Zadejte Vaši hodinovou mzdu", "300"))
const hodinyZaDen = Number(prompt("Zadejte kolik hodin denně pracujete?", "8"))
const dnyZaMesic = Number(prompt("Kolik dnů v měsíci pracujete?", "21"))

document.body.innerHTML += "<p> Vaše měsíční výplata je: " + (hodinovaSazba*hodinyZaDen*dnyZaMesic) + " Kč.</p>"


