;(function(){

	const selector = "#contact-form"
	//$(".step:nth-child(1)").addClass("active")
	$(selector).find(".input").on("change",(e)=>{
		let $input = $(e.target)
		let $next_step = $input.parent().next(".step")
		if ($next_step.length > 0) 
		{
				siguiente($next_step)
		}
		else
		{
			validar_formulario()
		}

	
	}) 

	//helpers

	function validar_formulario()
	{
		if (es_valido_formulario()) 
		{

		}
		else
		{
			let fieldsetInvalido = $(selector).find(".input:invalid").first().parent()
			siguiente(fieldsetInvalido)
		}
	}

	function es_valido_formulario()
	{
		return document.querySelector(selector).checkValidity()
	}

	function siguiente($next_step)
	{
		$(".step.active").removeClass("active")
		$next_step.addClass("active")
		$next_step.find(".input").focus()
		//$next_step.focus()
	}

})()