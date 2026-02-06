// TODO Enfadar a la consola , Num maximo de intentos , final , reglas , añadir easter egg/dificultad , acabar jumpscare
const costat1 = ["malote" , "policia", "madre", "padre", "hijo1", "hijo2", "hija1", "hija2"];
const barca = [];
const costat2 = [];

const foxy = document.getElementById('foxy');
const contenidorC1 = document.getElementById("personatges-c1");
const missatgeDisplay = document.getElementById("missatge");
const contenidorB = document.getElementById("barca-display");
const contenidorC2 = document.getElementById("personatges-c2");

let contador= 0
let ir_hacia_la_derecha = true

function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";
        if (ir_hacia_la_derecha) {

            ir_hacia_la_derecha = false
            contenidorC1.disabled = false
        }else{
            ir_hacia_la_derecha = true
            contenidorC1.disabled = true
        }

        boto.addEventListener("click", () => {
            barco_añadir(element)
        });

        contenidorC1.appendChild(boto);
    });
}

function barco_añadir(element){
    if(contador < 2) {
        let index = ""
        let personaje_seleccionado= ""
        if(ir_hacia_la_derecha) {
            index = costat1.indexOf(element);
            personaje_seleccionado = costat1[index];
            costat1.splice(index, 1);
            barca.push(personaje_seleccionado);
            contador++
        }else{
            index = costat2.indexOf(element);
            personaje_seleccionado = costat2[index];
            costat2.splice(index, 1);
            barca.push(personaje_seleccionado);
            contador++

        }


        dibujar()
    }else{
        let num= Math.trunc(Math.random() * 10)
        if(num === 2){
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

    let personaje_seleccionado = barca[index];
    barca.splice(index, 1);
    if(ir_hacia_la_derecha) {
        costat1.push(personaje_seleccionado);
        contador--
    }else{
        costat2.push(personaje_seleccionado);
        contador--
    }
    dibujar()
}

function cruzar(){

    if(comprobar_cosas() === true) {

        if (ir_hacia_la_derecha) {

            ir_hacia_la_derecha = false
            for (let i = 0; i <= barca.length; i++) {
                bajar(barca[0])
            }
            // boto.disabled = false

        } else {

            ir_hacia_la_derecha = true
            for (let i = 0; i <= barca.length; i++) {
                bajar(barca[0])
            }

        }
    }
    else{
        alert('no puede cruzar')
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
            }else{
                test_padre = true
            }
        }else if(costat2.includes('padre')) {
            if(costat2.includes('hija1') || costat2.includes('hija2')){
                if(costat2.includes('madre')){
                    test_padre = true
                }
            }else{
                test_padre = true
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
            }else{
                test_madre = true
            }
        }else if(costat2.includes('madre')) {
            if(costat2.includes('hijo1') || costat2.includes('hijo2')){
                if(costat2.includes('padre')){
                    test_madre = true
                }
            }else{
                test_madre = true
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

    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            bajar(element)

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorB.appendChild(boto);
    });

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/"+element+".png width='100px' height='100px'>";

        if(ir_hacia_la_derecha) {
            boto.disabled = false
        }else{
            boto.disabled = true
        }

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            barco_añadir(element)

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorC1.appendChild(boto);
    });

    costat2.forEach(element => {
        const boto = document.createElement("button");
        boto.innerHTML = "<img src=/imagenes/" + element + ".png width='100px' height='100px'>";

        if(ir_hacia_la_derecha) {
            boto.disabled = true
        }
        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca


            barco_añadir(element)

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}.`;

        });

        contenidorC2.appendChild(boto);
    });
}

// Inicialitzem la vista
actualitzarInterficie();