// TODO Enfadar a la consola , final , añadir easter egg/dificultad
const costat1 = ["malote" , "policia", "madre", "padre", "hijo1", "hijo2", "hija1", "hija2"];
const barca = [];
const costat2 = [];

const perros = ['him', 'snoopdog', 'perroemo', 'sideeye', 'perropanzon']
let perroaleatorio= Math.trunc(Math.random() * 5)
perro = perros[perroaleatorio]

const botonreto= document.getElementById('btn-reto')
const foxy = document.getElementById('foxy');
const contenidorC1 = document.getElementById("personatges-c1");
const contenidorB = document.getElementById("barca-display");
const contenidorC2 = document.getElementById("personatges-c2");
const reglas_reto = document.getElementById("regles");
const modal = document.getElementById("myModal");
const cantidadvictorias = document.getElementById("victorias");
botonreto.hidden = true;
let retoperro= false

let victorias = 0

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
    const boto = document.getElementById("btn-creuar");

    if(comprobar_cosas() === true) {

        if (ir_hacia_la_derecha) {

            boto.style.alignSelf = "flex-end";
            boto.innerHTML = "<img src='imagenes/barco_noob_der.png' width='100px'>";

            ir_hacia_la_derecha = false
            for (let i = 0; i <= barca.length; i++) {
                bajar(barca[0])
            }
            if(costat2.length === 8 && retoperro === false){
                ganar()
                botonreto.hidden = false;
            }else if(costat2.length === 9 && retoperro === true){
                ganar()
            }

        } else {

            boto.style.alignSelf = "flex-start";
            boto.innerHTML = "<img src='imagenes/barco_noob_izq.png' width='100px'>";

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
    let test_perro = false

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
                alert('Están las hijas en la barca')
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
                alert('Están los hijos en la barca')
            }else{
                test_madre = true
            }
        }

        // Aqui irá la logica 'perro'

        if(retoperro) {
            if (costat1.includes(perro)) {
                if (costat1.includes('madre') || costat1.includes('padre') || costat1.includes('policia')) {
                    test_perro = true
                }else if(costat1.length === 1){
                    test_perro = true
                }
            } else if (costat2.includes(perro)) {
                if (costat2.includes('policia') || costat2.includes('padre') || costat2.includes('madre')) {
                    test_perro = true
                }else if(costat2.length === 1){
                    test_perro = true
                }
            } else if (barca.includes(perro)) {
                if(barca.includes('policia') || barca.includes('padre') || barca.includes('madre')) {
                    test_perro = true
                }
            }


        }else{
            test_perro = true
        }

    //     Comprobar tests
        if(test_malote && test_padre && test_madre && test_perro){
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

        });

        contenidorC2.appendChild(boto);
    });
}

function ganar(){
    fade()
    setTimeout(() => {
        for (let i= 0; i<costat2.length; i++) {
            costat1.push(costat2[i]);
        }
        costat2.splice(0,costat2.length)

        ir_hacia_la_derecha = true;
        const boto = document.getElementById("btn-creuar");
        boto.style.alignSelf = "flex-start";
        boto.innerHTML = "<img src='imagenes/barco_noob_izq.png' width='100px'>";
        dibujar()
    }, 1000)
    
}


function reto(){
    if(victorias === 1){
        retoperro = true
        costat1.push(perro)
        reglas_reto.innerHTML = '<ul>\n' +
            '    <li>Máximo 2 personas en la barca.</li>\n' +
            '    <li>Solo pueden conducir el policia, el padre y la madre</li>\n' +
            '    <li>El ladrón no puede estar con los familiares si no está el policia</li>\n' +
            '    <li>El padre no puede estar solo con las hijas sin la madre</li>\n' +
            '    <li>la madre no puede estar sola con los hijos sin el padre</li>\n' +
            '    <li>El perro necesita no puede quedarse a solas con los niños ni el ladrón</li>\n' +
            '  </ul>'
    }
    dibujar()
}

// Inicialitzem la vista
actualitzarInterficie();

function fade(){
    victorias++
    cantidadvictorias.innerHTML = '<h3>Victorias: ' + victorias + '</h3>'
    modal.style.display = "block";
}

function nuevo_reto(){

    reto()
    modal.style.display = "none";
    dibujar()
}