$(document).ready(function(){
		$(".welcome_section").show();

		$("#home").click(function(){
			$(".selected").removeClass("selected");
			$(this).addClass("selected");

			$(".hide").hide();
			$(".welcome_section").show();
		});

		$("#company").click(function(){
			$(".selected").removeClass("selected");
			$(this).addClass("selected");

			$(".hide").hide();
			$(".about_section").show();
		});

		$("#products").click(function(){
			$(".selected").removeClass("selected");
			$(this).addClass("selected");

			$(".hide").hide();
			$(".product_section").show();
		});

		$("#contact").click(function(){
			$(".selected").removeClass("selected");
			$(this).addClass("selected");

			$(".hide").hide();
			$(".contact_section").show();
		});

});