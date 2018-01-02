;(function(){

	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(document.getElementById('map'),{
			center:{
				lat:4.6972323,
    			lng:-74.0503135
			},
			zoom: 16
		})
	})

})()