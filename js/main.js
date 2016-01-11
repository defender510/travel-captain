function initMap() {
  var myLatLng = {lat: 40.719882, lng: -74.000158};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
    scrollwheel: false,
    // draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

$('#checkin,#checkout').datepicker({
    isRTL: false,
    format: 'dd/mm/yyyy',
    autoclose:true
});

$('.smallImg').on('click', function(){
      var imageName = $(this).data( "img" );
      $('.largeImg').html('<img src="img/'+imageName+'.jpg">');
  });