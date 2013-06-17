
var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ResumeController = new Controller();

ResumeController.main = function() {
  this.title = 'Locomotive'
  this.render();
}

module.exports = ResumeController;
