if(navigator.serviceWorker)
{
	navigator.serviceWorker.register("/sw.js")
}

;(function(){

	let sticky = false
	let currentPosition = 0
	checkScroll()
	isOpen()
	const imageCounter =  $("[data-name=image-counter]").attr("content")
	const email = "osarus-13@hotmail.com"
	console.log(imageCounter)
	console.log($(window).height());
	

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	//Menu responsivo
	$("#menu_opener").on("click",toggleNav)
	$(".menu-link").on("click",toggleNav)
	//fin menu responsivo

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

	//Controlador Sticky Navigator
	$(window).scroll(checkScroll)
	//Fin Controlador Sticky Navigator

	//Funciones
	function isOpen(){
		let date = new Date()
		const curret_hour = date.getHours()
		if (curret_hour < 10 || curret_hour > 22 ) 
		{
			$("#is-open .text").html("Cerrado Ahora <br /> Abierto desde las 10:00 am a 10:00 pm")
			console.log(curret_hour)
		}
	}

	function checkScroll()
	{
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
	}

	function toggleNav()
	{
		$("#responsive-nav ul").toggleClass("active")
		$("#menu_opener").toggleClass(".glyphicon-menu-hamburger")
	}

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