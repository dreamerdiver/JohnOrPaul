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
    var userInput = document.getElementById("userString");
    var userString = userInput.value;
    var searchType = document.getElementById("singPlayDropdown");
    output.innerHTML = "Song: " + userString + "<br />";

    switch (searchType.value) {
        case "wrote" :
            searchBySongWriter(userString, output);
            break;
        case "sang" :
            searchByVocalist(userString, output);
            break;
    }
}

function searchBySongWriter(input, output) {
    for (var i in songs) {
        var song = songs[i];
        if (input == song.title) {
            output.innerHTML += "Written By: " + song.writer;
        }
    }
    return false;
}

function searchByVocalist(input, output) {
    for (var i in songs) {
        var song = songs[i];
        if (input == song.title) {
            output.innerHTML += "Main Vocalist: " + song.vocalist;
        }
    }
    return false;
}



