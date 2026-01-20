const costat1 = ["Lladre", "Policia", "Mare", "Pare", "Fill1", "Fill2", "Filla1", "Filla2"];
const barca = [];
const costat2 = [];

const contenidorC1 = document.getElementById("personatges-c1");
const missatgeDisplay = document.getElementById("missatge");

function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            let index = costat1.indexOf(element);

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}. Hauries de moure'l a la barca!`;

        });

        contenidorC1.appendChild(boto);
    });
}

// Inicialitzem la vista
actualitzarInterficie();
