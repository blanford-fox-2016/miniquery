/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
    constructor() {

    }
    static select(el) {
        return document.querySelectorAll(el)
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
    constructor() {

    }
    static hide(el) {
        let element = SweetSelector.select(el)
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'none'
        }
    }
    static show(el) {
        let element = SweetSelector.select(el)
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'block'
        }
    }
    static removeClass(el, newClass) {
        let element = SweetSelector.select(el)
        for (var i = 0; i < element.length; i++) {
            element[i].className.replace(/(?:^|\s)newClass(?!\S)/g, '')
        }
    }
    static addClass(el, newClass) {
        let element = SweetSelector.select(el)
        for (var i = 0; i < element.length; i++) {
            element[i].className += ` ${newClass}`
        }
    }

}

/*

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
    constructor() {

    }
    static on(el, condition, cb) {
        let element = SweetSelector.select(el)
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener(condition, cb)
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
    constructor() {

    }
    static request({ url: url, type: type, success, fail }) {
        var xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText)
                success(data)
            } else {
                let err = `Request failed. Returned status of ${xhr.status}`
                fail(err)
            }
        };
        xhr.send();
    }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

function miniquery(el) {
    function hide() {
        DOM.hide(el)
    }

    function show() {
        DOM.show(el)
    }

    return ({
        this: SweetSelector.select(el),
        hide: hide,
        show: show
    })
}

const $ = miniquery
