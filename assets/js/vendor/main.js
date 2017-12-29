;(function(){

	let sticky = false
	let currentPosition = 0
	const imageCounter =  $("[data-name=image-counter]").attr("content")
	const email = "osarus-13@hotmail.com"
	console.log(imageCounter)
	console.log($(window).height());
	$("#contact-form").on("submit",function(e){
		sendForm($(this))
		e.preventDefault()
		return false
	})
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
	//Fin del controlador 

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
	
	//Funcion de enviado metodo AJAX
	function sendForm($form){
		console.log($form.formObject());
		$.ajax({
	    url: $form.attr("action"), 
	    method: "POST",
	    data: $form.formObject(),
	    dataType: "json"
	})
	}

})()