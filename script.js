
const costat1 = ["malote" , "policia", "madre", "padre", "hijo1", "hijo2", "hija1", "hija2"];
const barca = [];
const costat2 = [];

const cuerpo = document.getElementById('body')
const contenidorC1 = document.getElementById("personatges-c1");
const missatgeDisplay = document.getElementById("missatge");
const contenidorB = document.getElementById("barca-display");
const contenidorC2 = document.getElementById("personatges-c2");

let contador= 0
let voy_a_vox = true

function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            barco_añadir(element)

            // contenidorB.innerHTML += "<button onclick='barcoquitar()'><img src=/imagenes/"+element+".png width='100px' heigth='100px'></button>";

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            // missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorC1.appendChild(boto);
    });
}

function barco_añadir(element){
    if(contador < 2) {
        let index = ""
        let alguna_variable= ""
        if(voy_a_vox) {
            index = costat1.indexOf(element);
            console.log('Index:', index)
            alguna_variable = costat1[index];
            costat1.splice(index, 1);
            console.log('Has pulsado', alguna_variable);
            barca.push(alguna_variable);

        }else{
            index = costat2.indexOf(element);
            alguna_variable = costat2[index];
            costat2.splice(index, 1);
            console.log('Has pulsado', alguna_variable);
            barca.push(alguna_variable);
        }

        console.log('En la barca hay:', barca);
        contador++
        console.log('Contador:', contador)
        dibujar()
    }else{
        let num= Math.trunc(Math.random() * 10)
        console.log(num)
        if(num !== 5){
            alert('No puedes máss')
            cuerpo.innerHTML+= '<img src="/imagenes/foxy.gif" width="1000px" height="1000px" id="susto">'
        }else{
            alert('No puedes más')
        }
    }
}

function bajar(element){
    let index = barca.indexOf(element);

    let alguna_variable = barca[index];
    barca.splice(index, 1);
    console.log('Has pulsado', alguna_variable);
    if(voy_a_vox) {
        costat1.push(alguna_variable);
        console.log('En la barca hay:', barca);
        contador--
        console.log('Contador:', contador)
    }else{
        costat2.push(alguna_variable);
        console.log('En la barca hay:', barca);
        contador--
        console.log('Contador:', contador)
    }
    dibujar()
}

function cruzar(){
    if(voy_a_vox){

        voy_a_vox= false
        for(let i=0;i<=barca.length;i++){
            bajar(barca[0])
        }

    }else{

        voy_a_vox= true
        for(let i=0;i<=barca.length;i++){
            bajar(barca[0])
        }

    }
}

function dibujar(){
    contenidorC1.innerHTML = "";
    contenidorB.innerHTML = "";
    contenidorC2.innerHTML = "";

    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            bajar(element)

            // contenidorB.innerHTML += "<button onclick='barcoquitar()'><img src=/imagenes/"+element+".png width='100px' heigth='100px'></button>";

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorB.appendChild(boto);
    });

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            barco_añadir(element)

            // contenidorB.innerHTML += "<button onclick='barcoquitar()'><img src=/imagenes/"+element+".png width='100px' heigth='100px'></button>";

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorC1.appendChild(boto);
    });

    costat2.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            barco_añadir(element)

            // contenidorB.innerHTML += "<button onclick='barcoquitar()'><img src=/imagenes/"+element+".png width='100px' heigth='100px'></button>";

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorC2.appendChild(boto);
    });
}



// Inicialitzem la vista
actualitzarInterficie();

