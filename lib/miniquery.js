/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

let SweetSelector = {
  select(property) {
    let selectorType = property.substring(0,1);
    let selectorName = property.substring(1, property.length);
    if (selectorType === "#") {
      return document.getElementById(selectorName)
    } else if (selectorType === ".") {
      return document.getElementsByClassName(selectorName)
    } else {
      return document.getElementsByTagName(property)
    }
  }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 let DOM = {
   // hiding selected dom
   hide(property) {
     let selector = Array.from(SweetSelector.select(property))
     selector.map((selection) => (selection.style.display = 'none'))
   },

   // showing selected dom
   show(property) {
     let selector = Array.from(SweetSelector.select(property))
     selector.map((selection) => (selection.style.display = 'block'))
   },

  // removing selected dom
  removeClass(property, changing) {
    let selector = Array.from(SweetSelector.select(property))
    selector.map((selection) => (selection.className = `${changing}`))
  },

  // adding class
  addClass(property, addition) {
    let selector = Array.from(SweetSelector.select(property))
    selector.map((selection) => (selection.className += ` ${addition}`))
  }

 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

let EventDispatcher = {
  on(target, action, callback) {
    let selector = Array.from(SweetSelector.select(target))
    selector.map((selection) => (selection.addEventListener(action, callback)))
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

let AjaxWrapper = {
  request(object) {
    let xhr = new XMLHttpRequest();
    xhr.open(object.type, object.url, true)
    xhr.onload = () => {
      if(this.readyState == 4 && this.status == 200) {
        obj.success(xhr.responseText)
      } else {
        object.fail()
      }
    }
    xhr.send(null);
  }
}
/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 function miniquery(property) {
  function hide() {
    return DOM.hide(param)
  }

  function show() {
    return DOM.show(property)
  }

  function addClass(addition) {
    return DOM.addClass(property, addition)
  }

  function removeClass(changing) {
    return DOM.removeClass(property, changing)
  }

  function on(action, callback){
    return EventDispatcher.on(property, action, callback)
  }

  function ajax(object){
    return AjaxWrapper.request(object)
  }
  return ({
      this: SweetSelector.select(property),
      hide: hide,
      show: show,
      removeClass: removeClass,
      addClass: addClass,
      on: on,
      ajax: ajax
    })

}
