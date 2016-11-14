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
            // console.log(document.getElementById(`${param}`))
            return document.getElementById(`${param}`)
        }
        else if (value[0] == '.') {
            let val = value.split(".")
            param = val[1]
            // console.log(document.getElementsByClassName(`${param}`))
            return document.getElementsByClassName(`${param}`)
        }
        else {
            // console.log(document.getElementsByTagName(`${value}`)[0].outerHTML)
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
            data.style.display = 'none'
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
            data.style.display = ''
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

class AjaxWrapper {
    static request(data) {
        var xhr = new XMLHttpRequest(data)
        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                data.success(this.responseText)
            }
            else {
                data.fail(this.responseText)
            }
        }
        xhr.open("GET", data.url, true)
        xhr.send()
    }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
function miniquery(value) {
    function hide() {
        return DOM.hide(value)
    }

    function show() {
        return DOM.show(value)
    }

    return (
        {
            this: SweetSelector.select(value),
            hide: hide,
            show: show
        }
    )
}

function $(value) {
    function hide() {
        return DOM.hide(value)
    }

    function show() {
        return DOM.show(value)
    }

    return (
    {
        this: SweetSelector.select(value),
        hide: hide,
        show: show
    }
    )
}