$(document).ready(function() {
	
	const button = document.querySelector("#button-volumen");
	const icon = document.querySelector("#button-volumen > i");
	const audio = document.querySelector("audio");

	//Variable para el audio cuando se haga click al botón derecha o izquierda.
	const move = new Audio('https://www.dropbox.com/s/fiyx4q2mdwynraj/FF7CursorMove.mp3?raw=1');

	//Botón para reproducir/pausar audio
	button.addEventListener("click", () => {
	  if (audio.paused) {
	    audio.volume = 0.2;
	    audio.play();
	    icon.classList.remove('fa-volume-up');
	    icon.classList.add('fa-stop');
	    
	  } else {
	    audio.pause();
	    icon.classList.remove('fa-stop');
	    icon.classList.add('fa-volume-up');
	  }
	  button.classList.add("fade");
	});	

	//Botones para interactuar con el formulario

	//Botón hacia la derecha
	$("#button-pag-der").click(function(){
    if ($(this).hasClass('desactivado')){
    }else{

    	if($("#envio").is(":visible")) {
    	move.play();
    	$("#envio").hide("fast");
    	$("#end").show("fast");
    	$("#button-pag-der").addClass('desactivado');
    	$("#textarea").hide();
       }

    	if ($("#textarea").is(":visible")) {
       	move.play();
       	$("#textarea").hide("fast");
       	$("#envio").show("fast");
       }

    	if ($("#p-7").is(":visible")) {
       	move.play();
       	$("#p-7").hide("fast");
       	$("#textarea").show("fast");
       	$("#p-1").hide();
       	$("#p-2").hide();
        $("#p-3").hide();
        $("#p-4").hide();
        $("#p-5").hide();
        $("#p-6").hide();
       }

    	if ($("#p-6").is(":visible")) {
       	move.play();
       	$("#p-6").hide("fast");
       	$("#p-7").show("fast");
       }

    	if ($("#p-5").is(":visible")) {
       	move.play();
       	$("#p-5").hide("fast");
       	$("#p-6").show("fast");
       }

    	if ($("#p-4").is(":visible")) {
       	move.play();
       	$("#p-4").hide("fast");
       	$("#p-5").show("fast");
       }

    	if ($("#p-3").is(":visible")) {
       	move.play();
       	$("#p-3").hide("fast");
       	$("#p-4").show("fast");
       }

    	if ($("#p-2").is(":visible")) {
       	move.play();
       	$("#p-2").hide("fast");
       	$("#p-3").show("fast");
       }

    	if ($("#p-1").is(":visible")) {
       	move.play();
       	$("#p-1").hide("fast");
       	$("#p-2").show("fast");
       }

    	if ($("#start").is(":visible")) {
       	move.play();
       	$("#start").hide("fast");
       	$("#p-1").show("fast");
       	$("#button-pag-izq").removeClass('desactivado');
       }
    }
	});

	//Botón hacia la izquierda
	$("#button-pag-izq").click(function(){
    if ($(this).hasClass('desactivado')){
    }else{

    	if ($("#p-1").is(":visible")) {
        move.play();
        $("#start").show("fast");
        $("#p-1").hide("fast");
        $("#p-2").hide();
        $("#p-3").hide();
        $("#p-4").hide();
        $("#p-5").hide();
        $("#p-6").hide();
        $("#button-pag-izq").addClass('desactivado');
       }

    	if ($("#p-2").is(":visible")) {
       	move.play();
       	$("#p-2").hide("fast");
       	$("#p-1").show("fast");
       }

       if ($("#p-3").is(":visible")) {
       	move.play();
       	$("#p-3").hide("fast");
       	$("#p-2").show("fast");
       }

        if ($("#p-4").is(":visible")) {
       	move.play();
       	$("#p-4").hide("fast");
       	$("#p-3").show("fast");
       }

       if ($("#p-5").is(":visible")) {
       	move.play();
       	$("#p-5").hide("fast");
       	$("#p-4").show("fast");
       }

       if ($("#p-6").is(":visible")) {
       	move.play();
       	$("#p-6").hide("fast");
       	$("#p-5").show("fast");
       }

       if ($("#p-7").is(":visible")) {
       	move.play();
       	$("#p-7").hide("fast");
       	$("#p-6").show("fast");
       }

       if ($("#textarea").is(":visible")) {
       	move.play();
       	$("#textarea").hide("fast");
       	$("#p-7").show("fast");
       }

       if ($("#envio").is(":visible")) {
       	move.play();
       	$("#envio").hide("fast");
       	$("#textarea").show("fast");
       }

       if ($("#end").is(":visible")) {
       	move.play();
       	$("#end").hide("fast");
       	$("#envio").show("fast");
       	$("#button-pag-der").removeClass('desactivado');

       }
    }
	});
});