/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(param) {
    if(param.length > 1){
      var selector = param.split("")[0]
      param = param.slice(1)
    }

    if(selector === "#"){
      var id = document.getElementById(`${param}`)
      console.log(id);
    }else if(selector === '.'){
      var klass = document.getElementsByClassName(`${param}`)
      console.log(klass);
    }else{
      var tagName = document.getElementsByTagName(`${param}`)[0].outerHTML
      console.log(tagName);
    }
    // return true
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(param){
    if(param.length > 1){
      var selector = param.split("")[0]
      param = param.slice(1)
    }
    if(selector === "#"){
      document.getElementById(`${param}`).style.display = "none"
    }else if(selector === '.'){
      var klass = document.getElementsByClassName(`${param}`)
      for (var i = 0; i < klass.length; i++) {
        klass[i].style.display = "none"
      }
    }else{
      document.getElementsByTagName(`${param}`).style.display = "none"
    }
  }

  static show(param){
    if(param.length > 1){
      var selector = param.split("")[0]
      param = param.slice(1)
    }
    if(selector === "#"){
      document.getElementById(`${param}`).style.display = ""
    }else if(selector === '.'){
      var klass = document.getElementsByClassName(`${param}`)
      for (var i = 0; i < klass.length; i++) {
        klass[i].style.display = ""
      }
    }else{
      document.getElementsByTagName(`${param}`).style.display = ""
    }
  }

  static addClass(first_class, additional){
    first_class = first_class.slice(1)

    var klass = document.getElementsByClassName(`${first_class}`)
    for (var i = 0; i < klass.length; i++) {
      klass[i].classList.add(additional)

      console.log(klass[i]);
    }
  }

  static removeClass(first_class, additional){
    first_class = first_class.slice(1)

    var klass = document.getElementsByClassName(`${first_class}`)
    for (var i = 0; i < klass.length; i++) {
      klass[i].classList.remove(additional)
      console.log(klass[i]);
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


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
