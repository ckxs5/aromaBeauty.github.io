$(document).ready(function(){
	var mymap = L.map('mapid').setView([40.7290963,-74.0089746], 16);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', 
	{
        id: 'mapbox.streets'
    }).addTo(mymap);

	$('.menu-icon').click(function(){
		$('ul').toggleClass('active');
	})
});