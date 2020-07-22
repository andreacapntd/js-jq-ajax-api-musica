/* Attraverso una chiamata ajax all'Api di boolean avremo a
disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica. */

function getDiscMusic() {

  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data) {



      var success = data['success'];
      var values = data['response'];

      for (var i = 0; i < values.length; i++) {

        var cover = values[i]['poster'];
        var cdTitle = values[i]['title'];
        var artist = values[i]['author'];
        var year = values[i]['year'];


        showDiscMusic(cover, cdTitle, artist, year)






      }
    },
    error: function() {

      console.log('error');
    }
  })
}


function showDiscMusic(cover, cdTitle, artist, year) {

  var template = $('#template').html();
  var compiled = Handlebars.compile(template);
  var target = $('.cds-container');

  var areaHTML = compiled({

    'cover' : cover,
    'cdTitle' : cdTitle,
    'artist' : artist,
    'year' : year

  });

  target.append(areaHTML)


}




















function init() {

  getDiscMusic();

};





$(document).ready(init);
