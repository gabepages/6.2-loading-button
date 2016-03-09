var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');


var Airport = Backbone.Model.extend({
  initialize: function (){
    console.log('working');
  }

});



module.exports = Airport;
