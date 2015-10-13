/**
 * Created by Meesh on 9/24/15.
 */


function init(){
    var button = document.getElementById("runQuery");
        button.onclick = searchJohnOrPaul;
}

function searchJohnOrPaul() {
    var output = document.getElementById("outputDiv");
    var userInput = document.getElementById("userString");
    var userString = userInput.value;
    var searchType = document.getElementById("singPlayDropdown");
        switch (searchType.value) {
            case "wrote" :
                searchBySongWriter(userString, output);
                break;
            case "sang" :
                searchByVocalist(userString, output);
                break;
        }
    output.innerHTML = "Song: " + userString + "<br />";
}

function searchBySongWriter(input, output) {
    var songs = JSON.parse(songs);
        for (var song in songs) {
            if (input == song.title) {
                output.innerHTML += "Written By: " + song.writer;
            }
        }
    return false;
}

function searchByVocalist(input, output) {
    var songs = JSON.parse(songs);
        for (var song in songs) {
            if (input == song.vocalist) {
                output.innerHTML += "Main Vocalist: " + song.vocalist;
            }
        }
    return false;
}

