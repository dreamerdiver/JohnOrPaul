/**
    * Project: John or Paul?
    * Class: main.js
    * Created by Meesh
    * 9/24/15
    */

function init(){
    var button = document.getElementById("runQuery");
    button.onclick = searchJohnOrPaul;
}

function searchJohnOrPaul(e) {
    e.preventDefault();
    var output = document.getElementById("outputDiv");
    var userString = document.getElementById("userString").value;
    var inputREF = userString.toUpperCase();
    var searchType = document.getElementById("singPlayDropdown").value;
    var userInputForm = document.getElementById("userInputForm");
    switch (searchType) {
        case "wrote" :
            searchBySongWriter(inputREF, output);
            break;
        case "sang" :
            searchByVocalist(inputREF, output);
            break;
    }
}

function searchBySongWriter(input, output) {
    for (var i in songs) {
        var song = songs[i];
        if (input == song.title) {
            output.innerHTML = "Song: " + input + "<br />";
            output.innerHTML += "Written By: " + song.writer + "<br />";
        }
    }
    return false;
}

function searchByVocalist(input, output) {
    for (var i in songs) {
        var song = songs[i];
        if (input == song.title) {
            output.innerHTML = "Song: " + input + "<br />";
            output.innerHTML += "Main Vocalist: " + song.vocalist + "<br />";
        }
    }
    return false;
}



