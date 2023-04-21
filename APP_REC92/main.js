//accueil
function goToAccueil(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "block";
    var code = document.getElementById("code");
    code.style.display = "none";
    var codeCorrect = document.getElementById("codeCorrect");
    codeCorrect.style.display = "none";
    var codeIncorrect = document.getElementById("codeIncorrect");
    codeIncorrect.style.display = "none";
    var pageInfo = document.getElementById("pageInfos");
    pageInfos.style.display = "none";
    var pageIndice = document.getElementById("pageIndice");
    pageIndice.style.display = "none";
    var pageMap = document.getElementById("pageMap");
    pageMap.style.display = "none";
    var carteVoisin = document.getElementById("carteVoisin");
    carteVoisin.style.display = "none";
    var carteBureau = document.getElementById("carteBureau");
    carteBureau.style.display = "none";
    var carteCommi = document.getElementById("carteCommi");
    carteCommi.style.display = "none";
    var carteSecte = document.getElementById("carteSecte");
    carteSecte.style.display = "none";
}

function goToPageInfos(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var pageInfo = document.getElementById("pageInfos");
    pageInfos.style.display = "block";
}

function goToPageIndice(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var pageIndice = document.getElementById("pageIndice");
    pageIndice.style.display = "block";
}

function goToPageMap(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var pageMap = document.getElementById("pageMap");
    pageMap.style.display = "block";
}


//cartes
function goToVoisin(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var carteVoisin = document.getElementById("carteVoisin");
    carteVoisin.style.display = "block";
}

function goToBureau(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var carteBureau = document.getElementById("carteBureau");
    carteBureau.style.display = "block";
}

function goToCommi(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var carteCommi = document.getElementById("carteCommi");
    carteCommi.style.display = "block";
}

function goToSecte(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var carteSecte = document.getElementById("carteSecte");
    carteSecte.style.display = "block";
}



//codes
function goToCode(){
    var accueil = document.getElementById("accueil");
    accueil.style.display = "none";
    var code = document.getElementById("code");
    code.style.display = "block";
}

function codeVoisin (form) {
    var inputValue = form.inputbox.value;
    if (form.inputbox.value == "B48" || form.inputbox.value == "b48"){
        var codeCorrect = document.getElementById("codeCorrect");
        codeCorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
        
    }
    else{
        var codeCorrect = document.getElementById("codeIncorrect");
        codeIncorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
    }
    
}

function codeBureau (form) {
    var inputValue = form.inputbox.value;
    if (form.inputbox.value == "CADRE" || form.inputbox.value == "cadre"){
        var codeCorrect = document.getElementById("codeCorrect");
        codeCorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
        
    }
    else{
        var codeCorrect = document.getElementById("codeIncorrect");
        codeIncorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
    }
    
}

function codeCommi (form) {
    var inputValue = form.inputbox.value;
    if (form.inputbox.value == "T80" || form.inputbox.value == "t80"){
        var codeCorrect = document.getElementById("codeCorrect");
        codeCorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
        
    }
    else{
        var codeCorrect = document.getElementById("codeIncorrect");
        codeIncorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
    }
    
}

function codeSecte (form) {
    var inputValue = form.inputbox.value;
    if (form.inputbox.value == "ELUE SACRIFIEE" || form.inputbox.value == "élue sacrifiée" || form.inputbox.value == "elue sacrifiee"){
        var codeCorrect = document.getElementById("codeCorrect");
        codeCorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
        
    }
    else{
        var codeCorrect = document.getElementById("codeIncorrect");
        codeIncorrect.style.display = "block";
        var code = document.getElementById("code");
        code.style.display = "none";
    }
    
}