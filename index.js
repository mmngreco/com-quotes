"use strict";

var QUOTES;

function readJson(file) {
    var request = new XMLHttpRequest();
    request.open("GET", file);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        QUOTES = request.response
        writeQuote(QUOTES);
    };
}


function choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}


function writeQuote(quotes){
    const q = choose(quotes)
    if (page === "quotes-guesser.html"){
        overWrite('quote', q)
        hideAll()
    } else {
        overWrite('quote', q)
    }
}


function wrapAuthor(quote){
    let re = /([a-zA-Z\. ]*)([ \.a-zA-Z]\[.*\])?\s?- /g
    console.log(quote)
    let newQuote = quote.replaceAll(re, '<span class="author">$1</span> - ')
    console.log(newQuote)
    return newQuote
}

function overWrite(id, value){
    const newElem = document.createElement('p');
    newElem.setAttribute("id", id);
    const elem = document.getElementById(id);
    value = wrapAuthor(value)
    newElem.innerHTML = value;
    elem.parentNode.insertBefore(newElem, elem.nextSibling);
    elem.parentNode.removeChild(elem);
}


function hideAll(){
    const elem = document.getElementsByClassName('author');
    for (var i=0, item; item = elem[i]; i++) {
        hideToggle(item)
    }

}


function hideToggle(item){
    if (item.hide) {
        item.hide = false
        item.innerText = item.txtbkp
    } else {
        item.hide = true
        item.txtbkp = item.innerText
        item.innerText = "xxxxxxx"
    }
}

function next(){
    writeQuote(QUOTES)
}

function zoomDefault() {
    document.body.style.zoom=1.4
}

var path = window.location.pathname;
var page = path.split("/").pop();

zoomDefault()
readJson('quotes.json')

