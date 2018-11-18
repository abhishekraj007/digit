const util = {
  init: function () {
    this.select();
    this.selectAll();
  },
  select() {
    return window.select = function (s) {
      return document.querySelector(s);
    };
  },
  selectAll() {
    return window.selectAll = function (s) {
      return document.querySelectorAll(s);
    };
  }
}

export default util;
