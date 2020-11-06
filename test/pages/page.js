class Page {
    constructor() { }
  
    open(path) {
      browser.maximizeWindow();
      browser.url(path)
    }
  }
  
  module.exports = Page;