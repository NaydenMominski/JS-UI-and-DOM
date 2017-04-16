/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/


function solve() {
    return function(selector) {
        var element,
            elements,
            targetButton,
            content,
            next,
            len, i;

        if (typeof selector !== 'string ' && !(selector instanceof HTMLElement)) {
            //    throw Error();
        }
        element = document.getElementById(selector);
        if (element === null) {
            //    throw Error();
        }
        elements = element.childNodes;
        len = elements.length;

        for (i = 0; i < len; i += 1) {

            if (elements[i].className === 'button') {
                elements[i].innerHTML = 'hide';
            }
        }
        element.addEventListener('click', function(ev) {
            targetButton = ev.target;
            next = targetButton.nextElementSibling;
            while (next.className !== "content") {
                next = next.nextElementSibling;

            }
            if (targetButton.className !== 'button') {
                return;
            }
            if (next.className === 'content') {
                content = next;

                while (next) {
                    if (next.className === 'button') {
                        if (content.style.display === 'none') {
                            content.style.display = '';
                            targetButton.innerHTML = 'hide';
                        } else {
                            content.style.display = 'none';
                            targetButton.innerHTML = 'show';
                        }
                        break;
                    }
                    next = next.nextElementSibling;
                }
            }
        }, false);
    };
}

module.exports = solve;