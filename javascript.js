/*De variabelen voor het berekenen van water en suiker als je begint met korrels */
let totaalWater = document.getElementById('totaal-water');
let totaalWaterSuiker = document.getElementById('totaal-water-suiker');

/*De variabelen voor het berekenen van korrels en suiker als je begint met water */
let totaalKorrels = document.getElementById('totaal-korrels');
let totaalKorrelsSuiker = document.getElementById('totaal-korrels-suiker');

/* zet de variabelen hierboven op nul omdat er nog geen input is */
totaalWater.innerHTML = '0';
totaalWaterSuiker.innerHTML = '0';
totaalKorrels.innerHTML = '0';
totaalKorrelsSuiker.innerHTML = '0';

/* Wanneer er ergens wordt geklikt, wordt de functie uitgevoerd om de berekening te maken */
window.addEventListener("click",berekenWaterSuiker);
window.addEventListener("click",berekenKorrelsSuiker);


function berekenWaterSuiker () {
    const inputKorrels = document.getElementById('kefir-korrels').value; // pak hoeveel korrels iemand intoets
    const delenWater = document.getElementById('formule-water').value; //pak de waarde hoeveel delen water
    const delenSuiker = document.getElementById('formule-suiker').value; //pak de waarde hoeveel delen suiker

    const berekenWater = inputKorrels * delenWater; // bereken hoeveel water
    totaalWater.innerHTML = Math.round(berekenWater); // rond het omhoog af

    const berekenSuiker = inputKorrels * delenSuiker; // bereken hoeveel suiker
    totaalWaterSuiker.innerHTML = Math.round(berekenSuiker); // rond het omhoog af
}

function berekenKorrelsSuiker() {
    const inputWater = document.getElementById('kefir-water').value; // pak hoeveel waterkefir iemand intoets
    const delenWater = document.getElementById('formule-water').value; //pak de waarde hoeveel delen water
    const delenSuiker = document.getElementById('formule-suiker').value; //pak de waarde hoeveel delen suiker

    const berekenKorrels = inputWater / delenWater; // bereken hoeveel kerfirkorrels
    totaalKorrels.innerHTML = Math.round(berekenKorrels); //rond het omhoog af

    const berekenSuiker = inputWater / delenWater * delenSuiker; //bereken hoeveel suiker
    totaalKorrelsSuiker.innerHTML = Math.round(berekenSuiker) // rond het omhoog af
}