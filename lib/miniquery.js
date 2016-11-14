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


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
