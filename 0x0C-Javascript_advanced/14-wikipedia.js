#!/usr/bin/node
function createElement(data) {
  let paragraph = document.createElement("P");
  paragraph.textContent = data.currentTarget.response;
  document.body.appendChild(paragraph);
}
function queryWikipedia(callback) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true
  );

  request.send();
  request.onload = callback;
}

queryWikipedia(createElement);
