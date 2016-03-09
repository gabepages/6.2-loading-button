var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var Airport = require('./airport');

var AirportCollection = Backbone.Collection.extend({
  model: Airport,
  baseUrl:'http://services.faa.gov/airport/status/' ,
  endUrl: '?format=application/JSON',
  template: function (ucLocation, targetLocation, context){
    var source = $(ucLocation).html();
    var template = handlebars.compile(source);
    $(targetLocation).html(template(context));
  }
});

var FavAirportCollection = Backbone.Collection.extend({
  model:Airport,
  template: function(ucLocation, targetLocation, context){
    var source = $(ucLocation).html();
    var template = handlebars.compile(source);
    $(targetLocation).append(template(context));
  }
});

module.exports = {
                'AirportCollection': AirportCollection,
                'FavAirportCollection': FavAirportCollection
              };
