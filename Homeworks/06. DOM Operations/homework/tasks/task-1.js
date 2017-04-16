/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/
function solve() {
    return function(element, contents) {
        var idOfElement, currentDiv, dFrag, cloneDiv;
        if (typeof element === 'string' || element instanceof HTMLElement) {
            if (typeof element === 'object') {
                idOfElement = element;
            } else {
                idOfElement = document.getElementById(element);
                if (idOfElement === null) {
                    throw 'non existing element with that id';
                }
            }
        } else {
            throw 'invalid input data';
        }
        if (!Array.isArray(contents)) {
            throw 'contents is not an array';
        } else if (contents.length > 0) {
            for (var i = 0; i < contents.length; i++) {
                if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
                    throw 'invalid elements of contents';
                }
            }
        }
        idOfElement.innerHTML = '';
        dFrag = document.createDocumentFragment();
        cloneDiv = document.createElement('div');
        for (var i = 0; i < contents.length; i++) {
            currentDiv = cloneDiv.cloneNode(true);
            currentDiv.innerHTML = contents[i];
            dFrag.appendChild(currentDiv);
        }
        idOfElement.appendChild(dFrag);
    };
}

module.exports = function() {

    return function(element, contents) {};
};