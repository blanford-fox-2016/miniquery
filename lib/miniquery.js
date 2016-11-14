/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(el) {
    return document.querySelectorAll(el);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
  static hide(el) {
    var elms = SweetSelector.select(el);
    for (var i = 0; i < elms.length; i++) {
      elms[i].style.display = 'none';
    }
  }
  static show(el) {
    var elms = SweetSelector.select(el);
    for (var i = 0; i < elms.length; i++) {
      elms[i].style.display = '';
    }
  }
  static addClass(el, newclass) {
    var elms = SweetSelector.select(el);
    for (var i = 0; i < elms.length; i++) {
      if (elms[i].classList)
        elms[i].classList.add(newclass);
      else
        elms[i].className += ' ' + newclass;
    }
  }
  static removeClass(el, remclass) {
    var elms = SweetSelector.select(el);
    for (var i = 0; i < elms.length; i++) {
      if (elms[i].classList)
        elms[i].classList.remove(remclass);
      else
        elms[i].className = elms[i].remclass.replace(new RegExp('(^|\\b)' + remclass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

  }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on(el, eventname, cb){
    var elms = SweetSelector.select(el);
    for (var i = 0; i < elms.length; i++) {
      elms[i].addEventListener(eventname, cb());
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
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        // console.log(data);
        obj.success(data);
      } else {
        // We reached our target server, but it returned an error
        obj.fail;
      }
    };

    request.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
