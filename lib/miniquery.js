/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
    select: function(input) {
        let element = input.split("") //#,e,y,e,d
        let symbol = element.shift() //#
        let selector = element.join("") //#eyed
        if (symbol == "#") {
            return document.getElementById(selector)
        } else if (symbol == ".") {
            return document.getElementsByClassName(selector)
        } else {
            return document.getElementsByTagName(input)
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
    hide: function(input) {
        let element = input.split("") //#,e,y,e,d
        let symbol = element.shift() //#
        let selector = element.join("") //#eyed
        if (symbol == "#") {
            document.getElementById(selector).style.display = 'none'
        } else if (symbol == ".") {
            for (let i = 0; i < document.getElementsByClassName(selector).length; i++) {
                document.getElementsByClassName(selector)[i].style.display = 'none'
            }
        } else {
            for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                document.getElementsByTagName(input)[i].style.display = 'none'
            }
        }
    },

    show: function(input) {
        let element = input.split("") //#,e,y,e,d
        let symbol = element.shift() //#
        let selector = element.join("") //#eyed
        if (symbol == "#") {
            document.getElementById(selector).style.display = 'block'
        } else if (symbol == ".") {
            for (let i = 0; i < document.getElementsByClassName(selector).length; i++) {
                document.getElementsByClassName(selector)[i].style.display = 'block'
            }
        } else {
            for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                document.getElementsByTagName(input)[i].style.display = 'block'
            }
        }
    },

    addClass: function(input, classAdded) {
        let element = input.split("") //#,e,y,e,d
        let symbol = element.shift() //#
        let selector = element.join("") //#eyed
        if (symbol == "#") {
            document.getElementById(selector).className += " " + classAdded
        } else if (symbol == ".") {
            for (let i = 0; i < document.getElementsByClassName(selector).length; i++) {
                document.getElementsByClassName(selector)[i].className += " " + classAdded
            }
        } else {
            for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                document.getElementsByTagName(input)[i].className += " " + classAdded
            }
        }
    },

    removeClass: function(input, classRemoved) {
        let element = input.split("") //#,e,y,e,d
        let symbol = element.shift() //#
        let selector = element.join("") //#eyed
        if (symbol == "#") {
            document.getElementById(selector).className = document.getElementById(selector).className.replace(classRemoved, "")
        } else if (symbol == ".") {
            for (let i = 0; i < document.getElementsByClassName(selector).length; i++) {
                document.getElementsByClassName(selector)[i].className = document.getElementsByClassName(selector)[i].className.replace(classRemoved, "")
            }
        } else {
            for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                document.getElementsByTagName(input)[i].className = document.getElementsByTagName(input)[i].className.replace(classRemoved, "")
            }
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
    on: function(input, action, callback) {
        let element = input.split("") //#,e,y,e,d
        let symbol = element.shift() //#
        let selector = element.join("") //#eyed
        if (symbol == "#") {
            document.getElementById(selector).addEventListener(action, callback)
        } else if (symbol == ".") {
            for (let i = 0; i < document.getElementsByClassName(selector).length; i++) {
                document.getElementsByClassName(selector)[i].addEventListener(action, callback)
            }
        } else {
            for (let i = 0; i < document.getElementsByTagName(input).length; i++) {
                document.getElementsByTagName(input)[i].addEventListener(action, callback)
            }
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
    request: function(input) {
        let xhr = new XMLHttpRequest()
        xhr.open(input.type, input.url, true)
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        xhr.responseType = 'json'
        xhr.send()

        xhr.onload = function(e) {
            let alldatas = e.target.response
            input.success(alldatas)
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * Namespace Miniquery 
 * -----------------------------------------------------------------------------
 */

// gimana biar bisa dipanggil kaya gini? -> miniquery(input).hide()

let miniquery = function(input) {
	function hide() {
		return DOM.hide(input)
	}

	function show() {
		return DOM.show(input)
	}

	return {
		hide: hide,
		show: show
	}
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
