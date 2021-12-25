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
    const q = choose(quotes)
    overWrite('quote', q)
}


function wrapAuthor(quote){
    // let re = /(<br>)?(\w+[^]*)- /g
    // let re = /(\w+)(\[.*\])?\s?- /g
    let re = /([a-zA-Z\. ]*)([ \.a-zA-Z]\[.*\])?\s?- /g
    console.log(quote)
    let newQuote = quote.replaceAll(re, '<span class="author">$1</span> - ')
    console.log(newQuote)
    return newQuote
}

function overWrite(id, value){
    const newElem = document.createElement('p');
    const elem = document.getElementById(id);
    value = wrapAuthor(value)
    newElem.innerHTML = value;
    elem.parentNode.insertBefore(newElem, elem.nextSibling);
    elem.parentNode.removeChild(elem);
}



readJson('quotes.json')
