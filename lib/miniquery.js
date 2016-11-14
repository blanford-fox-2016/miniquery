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
        return document.querySelector(el)
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
        element.style.display = 'none'
    }
    static show(el) {
        let element = SweetSelector.select(el)
        element.style.display = 'block'
    }
    static removeClass(el, newClass) {
        let element = SweetSelector.select(el)
        element.className.replace(/(?:^|\s)newClass(?!\S)/g, '')

    }
    static addClass(el, newClass) {
        let element = SweetSelector.select(el)
        element.className += ` ${newClass}`

    }

}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
    constructor() {

    }
    static on() {

    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
