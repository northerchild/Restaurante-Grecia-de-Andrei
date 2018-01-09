;(function(){

	const selector = "#contact-form"
	
	$(".step textarea").on("keydown",(e)=>{
		if (e.keyCode == 13) 
		{
			e.preventDefault()
			$(e.target).blur()
		}
	})

	//Funcionalidad de los botones del formulario
	$(".path-step").on("click",(e)=>{
		const $curret_circle = $(e.target)
		$(".path-step.active").removeClass("active")
		$curret_circle.addClass("active")
		const posicion = $curret_circle.index(".path-step") + 1
		let test = $(".step:nth-child("+posicion+")")
		siguiente(test)

	})
	//Fin 

	//$(".step:nth-child(1)").addClass("active")
	$(selector).find(".input").on("change",(e)=>{
		const $input = $(e.target)
		const $next_step = $input.parent().next(".step")
		const is_form_valid = es_valido_formulario()

		if (!is_form_valid && $next_step.length > 0) 
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
			enviar_formulario()
		}
		else
		{
			let fieldsetInvalido = $(selector).find(".input:invalid").first().parent()
			siguiente(fieldsetInvalido)
			$(".path-step:nth-child(1)").css({
				background:"#f50f0f"
			})
			$(".step").css({
				color:"#f50f0f"
			})
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
		//cordinar los circulos
		const posicion = ($next_step.index(".step")) + 1
		$(".path-step.active").removeClass("active")
		$(".path-step:nth-child("+posicion+")").addClass("active")
		//$next_step.focus()
	}

	//Testing del formulario
		/*
		$("#contact-form").on("submit",function(e){
			sendForm($(this))
			e.preventDefault()
			return false
		})
		*/
		//fin del testing


	//Funcion de enviado metodo AJAX
		function enviar_formulario(){
			const $form = $(selector)
			console.log($form.formObject())
			$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
		    	$form.slideUp()
		    	$("#info-contacto").html("Enviamos tu mensaje, muy pronto estaremos en contacto contigo.")
		    }

		})
		}


})()