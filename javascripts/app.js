(function(){
  var avocadoAPI = 'javascripts/avocado.json';
  $('#myBtn').hide();
  $.ajax({
    url: avocadoAPI,
    type:'GET',
    dataType:'json',
    async: false,
    success:function(obj){

      for (var i = 0 in obj){
        var $this = $(this);
        var num1 = i.toString();
        var num2 = '1';
        var objSum  = (+num1) + (+num2);
        var objName = obj[i].name;
        var objDesc = obj[i].description;
        var objImg  = obj[i].img;

        var elem = $("<li class='card-item'><div class='card-info'><div class='info-avocado'><p class='info-num'>"+objSum+"</p><img class='info-img desktop-img' src='images/"+objImg+"'/></div><div class='info'><p class='info-header'>"+objName+"</p><p class='info-description'>"+objDesc+"</p><img class='info-img mobile-img' src='images/"+objImg+"'/></div></div></li>");
        $('.card-list').append(elem);

        $('.info-img').click(function(objImg){
          //below works
          var imgLocation = $(this)[0].currentSrc;
          var temp = imgLocation.split('/');
          var imgLoc = temp[4];
          console.log(imgLoc);
        });
      }
    }
  });
  $(window).bind('scroll', function(){
    if($(this).scrollTop() > 200) { // show after 200 px of user scrolling
      $('#myBtn').show();
   }
  });

  $('#myBtn').click(function(){
    $("body").scrollTop('fast');
    $('#myBtn').hide();
  });

})();
