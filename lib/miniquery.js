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
      document.getElementsByTagName(`${param}`)[0].style.display = "none"
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
      document.getElementsByTagName(`${param}`)[0].style.display = ""
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
class EventDispatcher {
  static on(class_name, event_, callback){
    if(class_name.length > 1){
      var selector = class_name.split("")[0]
      class_name = class_name.slice(1)
    }
    if(selector === "#"){
      document.getElementById(`${class_name}`).addEventListener(event_, callback)
    }else if(selector === '.'){
      var klass = document.getElementsByClassName(`${class_name}`)
      for (var i = 0; i < klass.length; i++) {
        klass[i].addEventListener(event_, callback)
      }
    }else{
      document.getElementsByTagName(`${class_name}`).addEventListener(event_, callback)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(obj){
    var xhttp = new XMLHttpRequest();

    xhttp.open(`${obj.type}`, `${obj.url}`, true);

    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
          obj.success(this.responseText)
        }else{
          obj.fail()
        }
    };
    xhttp.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

// const miniquery = SweetSelector.select

function miniquery(param) {
  function hide() {
    return DOM.hide(param)
  }

  function show() {
    return DOM.show(param)
  }

  function addClass(){
    return DOM.addClass(param, 'shaded')
  }

  function removeClass(){
    return DOM.removeClass(param, 'shaded')
  }

  function on(e, callback){
    return EventDispatcher.on(param, e, callback)
  }

  function ajax(obj){
    return AjaxWrapper.request(obj)
  }
  return ({
      this: SweetSelector.select(param),
      hide: hide,
      show: show,
      addClass: addClass,
      removeClass: removeClass,
      on: on,
      ajax: ajax
    })

}
