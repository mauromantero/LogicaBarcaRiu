
const costat1 = ["malote" , "policia", "madre", "padre", "hijo1", "hijo2", "hija1", "hija2"];
const barca = [];
const costat2 = [];

const foxy = document.getElementById('foxy');
const cuerpo = document.getElementById('cuerpo');
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
        if (voy_a_vox) {

            voy_a_vox = false
            contenidorC1.disabled = false
        }else{
            voy_a_vox = true
            contenidorC1.disabled = true
        }

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
            alguna_variable = costat1[index];
            costat1.splice(index, 1);
            console.log('Has pulsado', alguna_variable);
            barca.push(alguna_variable);
            contador++
        }else{
            index = costat2.indexOf(element);
            alguna_variable = costat2[index];
            costat2.splice(index, 1);
            console.log('Has pulsado', alguna_variable);
            barca.push(alguna_variable);
            contador++

        }

        console.log('En la barca hay:', barca);

        dibujar()
    }else{
        let num= Math.trunc(Math.random() * 10)
        console.log(num)
        if(num !== 5){
            alert('No puedes máss')
            setTimeout(() =>{
                foxy.style.display = 'block';
                setTimeout(() =>{
                    foxy.style.display = 'none';
                    // cuerpo.style.backgroundColor = ;
                }, 1000)
            }, 5000)
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
    }else{
        costat2.push(alguna_variable);
        console.log('En la barca hay:', barca);
        contador--
    }
    dibujar()
}

function cruzar(){

    if(comprobar_cosas() === true) {

        if (voy_a_vox) {

            voy_a_vox = false
            for (let i = 0; i <= barca.length; i++) {
                bajar(barca[0])
            }
            // boto.disabled = false

        } else {

            voy_a_vox = true
            for (let i = 0; i <= barca.length; i++) {
                bajar(barca[0])
            }
            // boto.disabled = true;

        }
    }
    else{
        console.log('no puede cruzar')
    }
}

function comprobar_cosas() {

    let test_malote = false
    let test_padre = false
    let test_madre = false

    if (barca.includes('padre') || barca.includes('madre') || barca.includes('policia')) {
    //     Aqui irá la logica 'malote'
        if (costat1.includes('malote')) {
            if(costat1.includes('policia')) {
                test_malote = true
            }else if(costat1.length === 1){
                test_malote = true
            }
        }else if(costat2.includes('malote')){
            if(costat2.includes('policia')) {
                test_malote = true
            }else if(costat2.length === 1){
                test_malote = true
            }
        }else if(barca.includes('malote')) {
            if(barca.includes('policia')) {
                test_malote = true
            }
        }
    //     Aqui irá la logica 'padre' con 'hija1' e 'hija2'

        if(costat1.includes('padre')){
            if(costat1.includes('hija1') || costat1.includes('hija2')){
                if(costat1.includes('madre')){
                    test_padre = true
                }
            }
        }else if(costat2.includes('padre')) {
            if(costat2.includes('hija1') || costat2.includes('hija2')){
                if(costat2.includes('madre')){
                    test_padre = true
                }
            }
        }else if(barca.includes('padre')) {
            if (barca.includes('hija1') || barca.includes('hija2')) {
                test_padre = false
            }else{
                test_padre = true
            }
        }

    //     Aqui irá la logica 'madre' con 'hijo1' e 'hijo2'

        if(costat1.includes('madre')){
            if(costat1.includes('hijo1') || costat1.includes('hijo2')){
                if(costat1.includes('padre')){
                    test_madre = true
                }
            }
        }else if(costat2.includes('madre')) {
            if(costat2.includes('hijo1') || costat2.includes('hijo2')){
                if(costat2.includes('padre')){
                    test_madre = true
                }
            }
        }else if(barca.includes('madre')) {
            if (barca.includes('hijo1') || barca.includes('hijo2')) {
                test_madre = false
            }else{
                test_madre = true
            }
        }


    //     Comprobar tests
        if(test_malote && test_padre && test_madre){
            return true
        }

    }
}

function dibujar(){
    contenidorC1.innerHTML = "";
    contenidorB.innerHTML = "";
    contenidorC2.innerHTML = "";
    console.log(voy_a_vox)

    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        // if(costat1.includes('malote')&&(costat1.length=1)){
        //
        // }
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

        if(voy_a_vox) {
            boto.disabled = false
        }else{
            boto.disabled = true
        }

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
        boto.innerHTML = "<img src=/imagenes/" + element + ".png width='100px' height='100px'>";

        if(voy_a_vox) {
            boto.disabled = true
        }
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