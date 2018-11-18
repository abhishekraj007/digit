const util = {
  init: function () {
    this.select();
    this.selectAll();
    this.windowWidth();
    this.windowHeight();
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
  },

  windowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  },

  windowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
}

util.init();

export default util;
