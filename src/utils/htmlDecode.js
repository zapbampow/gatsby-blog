// function htmlDecode (input) {
//     var e = document.createElement('div');
//     e.innerHTML = input;
//     // handle case of empty input
//     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
// }

function htmlDecode(input)
{
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

export default htmlDecode;