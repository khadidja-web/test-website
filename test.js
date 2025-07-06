function ajouterTache() {
    const confirmation = confirm("Voulez-vous vraiment ajouter la tâche ??");
    if (!confirmation) return;

    const input = document.getElementById("taskInput");
    const texte = input.value.trim();
    if (texte === "") return;

    const divTache = document.createElement("div");
    divTache.className = "tache-item";
    divTache.textContent = texte;

    const boutonSuppr = document.createElement("button");
    boutonSuppr.textContent = "x";
    boutonSuppr.onclick = () => divTache.remove();

    divTache.appendChild(boutonSuppr);

    document.getElementById("liste").appendChild(divTache);
    input.value = "";
}
