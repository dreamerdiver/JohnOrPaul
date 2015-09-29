/**
 * Created by Meesh on 9/24/15.
 */

function init(){
    var button = document.getElementById("searchJohnOrPaul");
    button.onclick = searchJohnOrPaul();
}

function searchJohnOrPaul() {
    var letterTrans = {
        'Song Title': ['ALbum/Main Vocalist'],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
                                                + 'Vocalist: '],
        'A Little Help From My Friends': ['Album: Sgt peppers Lonely Hearts Club Band'
                                          + 'Vocalist: '],
        'Lucy in the Sky With Diamonds': ['Album: Sgt peppers Lonely Hearts' +
        ' Club Band'
        + 'Vocalist: '],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
        + 'Vocalist: '],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
        + 'Vocalist: '],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
        + 'Vocalist: '],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
        + 'Vocalist: '],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
        + 'Vocalist: '],
        'Sgt Peppers Lonely Hearts Club Band': ['Album: Sgt peppers Lonely Hearts Club Band'
        + 'Vocalist: '],
    };

    //Prompt User for String
    var output = document.getElementById("outputDiv");
    var form = document.getElementById("userInputForm");
    var stringTrans = form.inputString.value;
        stringTrans = stringTrans.toUpperCase();

    output.innerHTML = stringTrans + "<br />";
    for ( var index = 0; index < stringTrans.length; index++ ){
        output.innerHTML += (letterTrans[stringTrans.charAt(index)] + " " );
    }
    return false;
}



