/* 1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html. */

let seznamRecepty = document.querySelector('#recepty');

vygenerujVsechnyRecepty();


function vygenerujVsechnyRecepty(){
    
    for (let i = 0; i < recepty.length; i++){ 
        sestavRecept(i);
    }
}

function sestavRecept(i) {
    let recept = document.createElement('div');
    recept.className = 'recept';
    seznamRecepty.appendChild(recept);

    let divObrazek = document.createElement('div');
    divObrazek.className = 'recept-obrazek';
    recept.appendChild(divObrazek);

    let imgObrazek = document.createElement('img');
    divObrazek.appendChild(imgObrazek);
    imgObrazek.src = recepty[i].img;

    let receptInfo = document.createElement('div');
    receptInfo.className = 'recept-info';
    recept.appendChild(receptInfo);

    let nadpisReceptu = document.createElement('h3');
    receptInfo.appendChild(nadpisReceptu);
    nadpisReceptu.innerText = recepty[i].nadpis;
}

/* 2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.*/

let vyhledavac = document.getElementById('hledat');

function vyhledavat(){
    
    let zadanyText = vyhledavac.value;
    seznamRecepty.innerHTML = '';
    
    for(let i = 0; i < recepty.length; i++){
      
       if(recepty[i].nadpis.toLowerCase().includes(zadanyText.toLowerCase()) ){
            sestavRecept(i);
            console.log('aaa');
        } 

    }  
}

/* 3) Doplň filtrovanání receptů podle kategorie.*/ 

function filtrujKategorii(){
    let filtrKategorie = document.getElementById('kategorie').value;
    seznamRecepty.innerText = '';

    for (let i = 0; i < recepty.length; i++){ 
        if(recepty[i].kategorie == filtrKategorie){
            sestavRecept(i);
        } 
    } 
    
    if (filtrKategorie == ""){
            vygenerujVsechnyRecepty();
        }
}

/* 4) Doplň řazení receptů podle hodnocení. */ 
function serad(){
    let filtrSeradit = document.getElementById('razeni').value;
    seznamRecepty.innerText = '';
    console.log(filtrSeradit);
    
    if (filtrSeradit == 1){  

        recepty.sort(function (a, b){
            return b.hodnoceni - a.hodnoceni;
        })
        console.log(recepty);

        for (let i = 0; i < recepty.length; i++){ 
            sestavRecept(i);
        }
    } else if (filtrSeradit == 2) {

        recepty.sort(function (a, b){
            return a.hodnoceni - b.hodnoceni;
        })
        console.log(recepty);

        for (let i = 0; i < recepty.length; i++){ 
            sestavRecept(i);
        }
    } 
    
    if (filtrSeradit == ""){
        vygenerujVsechnyRecepty();
    }

}



    // if (filtrSeradit == "Od nejlepších"){  
    //     recepty.sort(function (a, b){
    //         return b.hodnoceni - a.hodnoceni;
    //     })
    //     console.log(recepty);

    //     for (let i = 0; i < recepty.length; i++){ 
    //         sestavRecept(i);
    //     }
    // } else {
    //     vygenerujVsechnyRecepty;
    // }




/* 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis. */



/* 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl. */