/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
    static select(value) {
        let param = ''
        if (value[0] == '#') {
            let val = value.split("#")
            param = val[1]
            return document.getElementById(`${param}`)
        }
        else if (value[0] == '.') {
            let val = value.split(".")
            param = val[1]
            return document.getElementsByClassName(`${param}`)
        }
        else {
            return document.getElementsByTagName(`${value}`)[0].outerHTML
        }
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
    static hide(value) {
        let param = ''
        if (value[0] == '#') {
            let val = value.split("#")
            param = val[1]
            let data = document.getElementById(`${param}`)
            for (let i = 0; i < data.length; i++) {
                data[i].style.display = 'none'
            }
        }
        else if (value[0] == '.') {
            let val = value.split(".")
            param = val[1]
            let data = document.getElementsByClassName(`${param}`)
            for (let i = 0; i < data.length; i++) {
                data[i].style.display = 'none'
            }

        }
        else {
            let data = document.getElementsByTagName(`${value}`)[0].outerHTML
            for (let i = 0; i < data.length; i++) {
                data[i].style.display = 'none'
            }
        }
    }

    static show(value) {
        let param = ''
        if (value[0] == '#') {
            let val = value.split("#")
            param = val[1]
            let data = document.getElementById(`${param}`)
            for (let i = 0; i < data.length; i++) {
                data[i].style.display = ''
            }
        }
        else if (value[0] == '.') {
            let val = value.split(".")
            param = val[1]
            let data = document.getElementsByClassName(`${param}`)
            for (let i = 0; i < data.length; i++) {
                data[i].style.display = ''
            }

        }
        else {
            let data = document.getElementsByTagName(`${value}`)[0].outerHTML
            for (let i = 0; i < data.length; i++) {
                data[i].style.display = ''
            }
        }
    }

    static removeClass(where, newClass) {
        let param = ''
        let val = where.split(".")
        param = val[1]
        let data = document.getElementsByClassName(`${param}`)
        for (let i = 0; i < data.length; i++) {
            data[i].classList.remove(newClass)
        }
    }

    static addClass(where, newClass) {
        let param = ''
        let val = where.split(".")
        param = val[1]
        let data = document.getElementsByClassName(`${param}`)
        for (let i = 0; i < data.length; i++) {
            data[i].classList.add(newClass)
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher {
    static on(selectClass, event, cb) {
        let param = ''
        let val = selectClass.split(".")
        param = val[1]
        if (event == 'click') {
            let data = document.getElementsByClassName(`${param}`)
            for (let i = 0; i < data.length; i++) {
                document.getElementsByClassName(`${param}`)[i].addEventListener('click', cb)
            }
        }
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
