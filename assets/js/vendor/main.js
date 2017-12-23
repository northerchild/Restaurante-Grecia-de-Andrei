;(function(){

	let sticky = false
	console.log($(window).height());
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
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