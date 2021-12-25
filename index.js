"use strict";

function readJson(file) {
    var request = new XMLHttpRequest();
    request.open("GET", file);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        writeQuote(request.response);
    };
}


function choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}


function writeQuote(quotes){
    console.log(quotes)
    const q = choose(quotes)

    overWrite('quote', q)

}


function overWrite(id, value){
    const newElem = document.createElement('p');
    const elem = document.getElementById(id);
    newElem.innerHTML = value;
    elem.parentNode.insertBefore(newElem, elem.nextSibling);
    elem.parentNode.removeChild(elem);
}



readJson('quotes.json')
