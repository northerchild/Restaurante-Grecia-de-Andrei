;(function(){

	let sticky = false
	let currentPosition = 0
	const imageCounter =  $("[data-name=image-counter]").attr("content")
	console.log(imageCounter)
	console.log($(window).height());
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	//Controlador del Slide
	setInterval(()=>{
		if (currentPosition < imageCounter) 
		{
			currentPosition++	
		}
		else
		{
			currentPosition = 0	
		}
		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		});
	},2500)

	$(window).scroll(()=>{
		const inBottom = isInBottom()

		if (inBottom && !sticky) 
		{
			//Mostrar Navegacion Sticky
			console.log("Cambiar la navegacion")
			sticky = true
			stickNavigation()
		}
		if (!inBottom && sticky) 
		{
			//Ocultar Navegacion Sticky
			console.log("volver a la navegacion")
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation()
	{
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp()
		$("#sticky-navigation").slideDown()

	}
	function unStickNavigation()
	{
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown()
		$("#sticky-navigation").slideUp()
	}

	function isInBottom()
	{
		const $description = $("#description")
		const descripcionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descripcionHeight * 1.8)
	}
	

})()