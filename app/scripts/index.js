var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');
var _ = require('underscore')
var Airport = require('./models/airport');
var Airports = require('./models/airport-collection');

var data;
var airport = new Airports.AirportCollection();
var favAirports =new Airports.FavAirportCollection();

function fetchData(searchStr){
  airport.url = airport.baseUrl + searchStr.toUpperCase() + airport.endUrl;
  airport.fetch({
    error: function(a, b, c){
      alert('Sorry airport not found.');
      $('.search-btn').text("Search");
    }
  }).done(function(info, status){
    data = info;
    console.log(data);
    $('.search-btn').text("Search");
    $('#search-area').val('');
    airport.template('#airport', '.airport', data);

  });
}


$('.search-btn').on('click', function(){
  var searchPhrase = $('#search-area').val();
  $('.search-btn').text("Loading...");
  fetchData(searchPhrase);
});

$('input').focusin(function (){
  $('#search-area').attr('placeholder', "");
})


$('.airport').on('click', '.clear-btn',function (e){
  $('.airport').html('');
});


 $('.airport').on('click', '.fav-btn', function(){
   favAirports.add([
     airport.toJSON()
   ]);
 });






   favAirports.on('add', function(){
     console.log('in add func',favAirports.toJSON());

     //cant get it to work without repeating 
    //  favAirports.template('#favs', '.favs-content',);
    });
