/*1. Disponer dos párrafos.Capturar el evento click
solo del primero utilizando la librería jQuery.*/

//CAMBIO COLOR PARRAFO 1
var x;
x = $(document);
x.ready(inicializar);

function inicializar() {
    var x;
    x = $("#parrafo1");
    x.click(presionar);
}
function presionar() {
    var x;
    x = $(this);
    x.css("color", "red");
}

//CAMBIO COLOR PARRAFO 2
$(document).ready(function () {
    $("#parrafo2").click(function () {
        $(this).css("color", "green");
    });
});

/*2. Mostrar una lista no ordenada con 4 elementos 'li'. 
Ocultar el que se presiona. Para ocultar un elemento jQuery 
tiene un método llamado hide().*/

$(document).ready(function () {
    $("li").click(function () {
        $(this).hide();
    });
});

/*3. Confeccionar una página que muestre dos tablas con tres 
filas cada una. Cambiar el color de fondo de cada fila de la primer 
tabla cuando sea presionada con el mouse(evento click).*/

$(document).ready(function () {
    $(".fila").click(function () {
        $(this).css("background-color", "red");

    });
});

/*4.Disponer un título de noticia y seguidamente la descripción
    de la noticia (encerrarlo en un div con un nombre de clase),
    repetir esto para tres noticias. Agregar tres botones que
    rescaten el nombre de la clase para la descripción de la noticia
    y cambien su tamaño de fuente.*/
$(document).ready(function () {
    $("#boton1").click(function () {
        $("#noticia1").css("font-size", "20px")
    });
    $("#boton2").click(function () {
        $("#noticia2").css("font-size", "25px");
    });
    $("#boton3").click(function () {
        $("#noticia3").css("font-size", "30px");
    });
});

/*5. Crear una página que contenga dos tablas de 3 filas y
    3 columnas cada una con un texto en cada casillero.
    Luego al presionar un botón cambiar por la cadena "-"
    solo el contenido de la primer tabla, dejando intacto el
    de la segunda.*/
$(document).ready(function () {
    $("#boton").click(function () {
        $(".tabla1").text("-----");
    });
});

/*6. Confeccionar una página que tenga dos botones.
    El primero debe mostrar en un alert el contenido HTML
    de la cabecera de la página y el segundo el contenido HTML
    del cuerpo de la página.*/
$(document).ready(function () {
    $("#head").click(function () {
        alert($("head").html());
    });

    $("#body").click(function () {
        alert($("body").html());
    });
});

/*7. Definir una tabla con un conjunto de filas y columnas.
    Definir dos estilos, uno para la sección thead y otro para
    la sección tbody. Mediante dos botones permitir asociar y
    desasociar clases.*/
$(document).ready(function () {
    $("#asociar1").click(function () {
        $("#fila1").css("background-color", "yellow");
    });

    $("#asociar2").click(function () {
        $("#fila2").css("background-color", "green");
    });

    $("#desasociar1").click(function () {
        $("#fila1").css("background-color", "");
    });

    $("#desasociar2").click(function () {
        $("#fila2").css("background-color", "");
    });
});

/*8. Crear una tabla con dos filas y dos columnas,
    cambiar el color del interior de la casilla cuando
    ingresamos con el mouse y regresarla al original
    cuando salimos.*/
$(document).ready(function () {
    $(".registro").mouseenter(function () {
        $(this).css("background-color", "green");
    });
    $(".registro").mouseleave(function () {
        $(this).css("background-color", "");
    });
});

/*9. Disponer un div de 800x70 píxeles. Al hacer doble clic
    redimensionarlo a 250x250 píxeles y si se hace doble clic
    nuevamente retornar al tamaño 800x70.*/
$(document).ready(function () {
    var redimensionado = false;
    $("#content").dblclick(function () {
        if (!redimensionado) {
            $("#contenedor").css("width",250);
            $("#contenedor").css("heigth",250);
        } else {
            $("#contenedor").css("width", 800);
            $("#contenedor").css("heigth", 70);
        }

        redimensionado = !redimensionado;
    });
});

/*10.Confeccionar una página que contenga un div con un conjunto
        de párrafos. Cuando se presione con el mouse dentro del div
        ocultarlo lentamente y cuando esté completamente oculto hacer
        que aparezca lentamente otro bloque de texto.*/
$(document).ready(function () {
    $("#texto1").click(function () {
        $(this).hide(4000);
        $("#texto2").show(4000);
    });
    $("#texto2").click(function () {
        $(this).hide(4000);
        $("#texto3").show(4000);
    });
    $("#texto3").click(function () {
        $(this).hide(4000);
        $("#texto1").show(4000);
    });
});