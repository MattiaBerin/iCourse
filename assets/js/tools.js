/**
 * Funzione che inserisce le attività nell'activity-box.
 * @param eventi Array di eventi in json.
*/
function createActivityBox(eventi){
    var intActivty1 = '<h4>I tuoi corsi</h4><ul>';
    var intActivty2 = '<h4>Altri corsi</h4><ul>';
    var activity = '';
    for(i=0; i<eventi.length; i++){
        activity += '<li>' + eventi[i].title + '</li>';
    }//for
    activity += '</ul>';

   document.getElementById('activity-box').innerHTML = intActivty1 + activity;
}//createActivityBox

/**
 * Funzione che inserisce le attività nell'activity-box.
 * @param comunicazioni Array di comunicazioni in json.
*/
function createSocialBox(comunicazioni){
    var intSocial1 = '<h4>Comunicazioni recenti</h4><ul>';
    var intSocial2 = '<h4>Altre comunicazioni</h4><ul>';
    var social = '';
    for(i=0; i<comunicazioni.length; i++){
        social += '<li>' + comunicazioni[i].title + '</li>';
    }//for
    social += '</ul>';

   document.getElementById('social-box').innerHTML = intSocial1 + social;
}//createActivityBox

/**
 * Funzione che mostra o nasconde il form di inserimento eventi.
*/
function showForm(){
    var display = document.getElementById('form-evnt').style.display;
    if(!display || display == "none"){
        document.getElementById('form-evnt').style.display = "block";
    }else{
        document.getElementById('form-evnt').style.display = "none";
    }//if-else
}//showForm

/**
 * Funzione che mostra una porzione di un form dato un valore precedentemente inserito.
*/
function showFine(){
    var select = document.getElementById('ripetizione').value;
    if(select != 0){
        document.getElementById('div-fine-rip').style.display = "block";
    }else{
        document.getElementById('div-fine-rip').style.display = "none";
    }
}//showFine 
