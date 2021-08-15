/*
            JQuery Effects

            $(document).ready(function(){
                $("#fade").click(function(){
                    $("#div1").fadeIn();
                    $("#div2").fadeIn("slow");
                    $("#div3").fadeIn("2500");
                });
                $("#fadeout").click(function(){
                    $("#div3").fadeOut();
                    $("#div2").fadeOut("slow");
                    $("#div1").fadeOut(2500);
                });

                $("#fadetoggle").click(function(){
                    $("#div1").fadeToggle();
                    $("#div2").fadeToggle();
                    $("#div3").fadeToggle();

                });

                $("#slide").click(function(){
                    $("#div1").slideUp();
                });
            });
            */

			/*
			Setando e pegando atributos e valores

            $(document).ready(function(){
                $("#mostrarlink").click(function(){
                    alert($("#google").attr("href")); // da print no valor
                    var x = $("#google").attr("href"); // salva em uma variável para mostrar no console.log
                    console.log(x);
                });

                // atribuindo valor ao href
                $("#SetarLink").click(function(){
                    $("#google2").attr({
                        "href" : "https://google.com/",
                        "target" : "_blank",
                        "color" : "red"
                    });
                });

                // retirando atributos dados!
                $("#RetirarLink").click(function(){
                    $("#google2").attr({
                        "href": " ",
                        "target" : " ",
                        "color" : " "
                    });
                });


                $("#remov").click(function(){
                    $("p").remove("#FeitoParaSerRemovido, Feito2");
                });
            });

*/

$(document).ready(function(){
	$("#VerElemento").click(function(){
		x = $("teste").parent();
		console.log(x);
	});
});

