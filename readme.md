# 🛶 El Repte de la Travessia del Riu

Aquest és un projecte educatiu basat en el clàssic trencaclosques de lògica japonès. L'objectiu és traslladar un grup de 8 persones d'una riba a l'altra d'un riu utilitzant una barca limitada, respectant un seguit de regles familiars i de seguretat.

## 📋 L'Enunciat

Vuit persones han de creuar el riu:
* Un **Policia** i un **Lladre**.
* Un **Pare** i dos **Fills**.
* Una **Mare** i dues **Filles**.

### ⚠️ Les Regles del Joc

1.  **Capacitat:** La barca només pot portar un màxim de **dues persones** alhora.
2.  **Conductors:** Només el **Policia**, el **Pare** o la **Mare** saben fer funcionar la barca.
3.  **El Lladre:** No pot estar amb ningú de la família si el Policia no hi és present.
4.  **El Pare:** No pot estar amb cap de les filles si la Mare no hi és.
5.  **La Mare:** No pot estar amb cap dels fills si el Pare no hi és.

---

## 💻 Objectius d'Aprenentatge

Aquest exercici està dissenyat per practicar conceptes fonamentals de programació:

* **Manipulació del DOM:** Creació dinàmica d'elements i actualització de la interfície.
* **Gestió d'Estats:** Ús d'arrays (`costat1`, `barca`, `costat2`) per controlar la posició dels personatges.
* **Lògica Condicional:** Implementar les regles del joc mitjançant sentències `if/else`.
* **Esdeveniments:** Gestió de clics i interacció de l'usuari.

---

## 🛠️ Estructura del Projecte

El projecte consta de tres fitxers base:

* `index.html`: Estructura dels contenidors (ribes, barca i panell de missatges).
* `style.css`: Estils bàsics per visualitzar l'escenari amb Flexbox.
* `script.js`: Lògica inicial per renderitzar els personatges i gestionar els moviments.

---

## 🚀 Com començar

1.  Fes un **Fork** d'aquest repositori.
2.  Clona el teu fork localment:
    ```bash
    git clone [https://github.com/el-teu-usuari/problema-riu.git](https://github.com/el-teu-usuari/problema-riu.git)
    ```
3.  Obre el fitxer `index.html` al teu navegador.

## 🏆 Reptes Extra

Si aconsegueixes resoldre la lògica bàsica, intenta:
1.  **Afegir dificultat i restriccions:** Nous personatges o noves restriccions sempre que hi hagi mínim una solució.
2.  **Animacions:** Afegir transicions CSS quan un personatge canviï de lloc.
3.  **Comptador:** Mostrar el nombre total de viatges fets per resoldre el repte.