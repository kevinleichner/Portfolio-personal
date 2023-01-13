  // BOTONES DEL NAV // 

$(document).ready(function() {

  var acercaDe = $('#acerca-de').offset().top,
    proyectos = $('#proyectos').offset().top,
    contacto = $('#contacto').offset().top

  $('#btn-acerca-de').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: acercaDe
    }, 500);
  });

  $('#btn-proyectos').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: proyectos
    }, 500);
  });

  $('#btn-contacto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: contacto
    }, 1000);
  });
  });

  // DESCRIPCION LEER MAS
var btnsLeerMas = [document.querySelector("#leerMas1"), document.getElementById("leerMas2"), document.getElementById("leerMas3"), document.getElementById("leerMas4"), document.getElementById("leerMas5"), 
  document.getElementById("leerMas6"), document.getElementById("leerMas7"), document.getElementById("leerMas8"), document.getElementById("leerMas9")];

var descripciones = [document.getElementById("descripcion1"), document.getElementById("descripcion2"), document.getElementById("descripcion3"), document.getElementById("descripcion4"), document.getElementById("descripcion5"), 
  document.getElementById("descripcion6"), document.getElementById("descripcion7"), document.getElementById("descripcion8"), document.getElementById("descripcion9")];

btnsLeerMas.forEach(function(btn){
  btn.addEventListener('click', (evento) => {
    var valor = btnsLeerMas.indexOf(evento.target);
    if (evento.target.innerHTML == 'Leer más') {
      evento.target.innerHTML = 'Leer menos';
      descripciones[valor].setAttribute("class","leer-menos");
    } else {
      evento.target.innerHTML = 'Leer más';
      descripciones[valor].setAttribute("class","descripcion");
    }
  });
})


  // CAROUSEL PUCK RUN //

    var btn = document.getElementById("1");
    var btn2 = document.getElementById("2");
    var btn3 = document.getElementById("3");
    var foto1 = document.getElementById("foto1");
    var foto2 = document.getElementById("foto2");
    var foto3 = document.getElementById("foto3");

    let temporizador;
    let temporizador2;
    let temporizador3;

    clearTimeout(temporizador2);
    clearTimeout(temporizador3);

    window.onload = function() {
      foto1.style.opacity = '1';
      btn.setAttribute('class','actual');
      temporizador = setTimeout(cambioColor2, 5000);
      foto4.style.opacity = '1';
      btn4.setAttribute('class','actual');
      temporizador4 = setTimeout(cambioColor5, 5000);
      foto7.style.opacity = '1';
      btn7.setAttribute('class','actual');
      temporizador7 = setTimeout(cambioColor8, 5000);
      foto10.style.opacity = '1';
      btn10.setAttribute('class','actual');
      temporizador10 = setTimeout(cambioColor11, 5000);
      foto13.style.opacity = '1';
      btn13.setAttribute('class','actual');
      temporizador13 = setTimeout(cambioColor14, 5000);
      foto16.style.opacity = '1';
      btn16.setAttribute('class','actual');
      temporizador16 = setTimeout(cambioColor17, 5000);
      foto19.style.opacity = '1';
      btn19.setAttribute('class','actual');
      temporizador19 = setTimeout(cambioColor20, 5000);
      foto22.style.opacity = '1';
      btn22.setAttribute('class','actual');
      temporizador22 = setTimeout(cambioColor23, 5000);
      foto25.style.opacity = '1';
      btn25.setAttribute('class','actual');
      temporizador25 = setTimeout(cambioColor26, 5000);
    }
    function cambioColor() {
      foto1.style.opacity = '1';
      foto2.style.opacity = '0';
      foto3.style.opacity = '0';
      btn.setAttribute('class','actual');
      btn2.removeAttribute('class','actual');
      btn3.removeAttribute('class','actual');
      temporizador = setTimeout(cambioColor2, 5000);;
      clearTimeout(temporizador2);
      clearTimeout(temporizador3);
    }
    function cambioColor2() {
      foto1.style.opacity = '0';
      foto2.style.opacity = '1';
      foto3.style.opacity = '0';
      btn2.setAttribute('class','actual');
      btn.removeAttribute('class','actual');
      btn3.removeAttribute('class','actual');
      temporizador2 = setTimeout(cambioColor3, 5000);
      clearTimeout(temporizador);
      clearTimeout(temporizador3);
    }
    function cambioColor3() {
      foto1.style.opacity = '0';
      foto2.style.opacity = '0';
      foto3.style.opacity = '1';
      btn3.setAttribute('class','actual');
      btn2.removeAttribute('class','actual');
      btn.removeAttribute('class','actual');
      temporizador3 = setTimeout(cambioColor, 5000);;
      clearTimeout(temporizador2);
      clearTimeout(temporizador);
    }
    
    
    btn.addEventListener('click', cambioColor);
    btn2.addEventListener('click', cambioColor2);
    btn3.addEventListener('click', cambioColor3);

// CAROUSEL COMPUTER DEFENSE //

    var btn4 = document.getElementById("4");
    var btn5 = document.getElementById("5");
    var btn6 = document.getElementById("6");
    var foto4 = document.getElementById("foto4");
    var foto5 = document.getElementById("foto5");
    var foto6 = document.getElementById("foto6");

    let temporizador4;
    let temporizador5;
    let temporizador6;

    clearTimeout(temporizador5);
    clearTimeout(temporizador6);

    function cambioColor4() {
      foto4.style.opacity = '1';
      foto5.style.opacity = '0';
      foto6.style.opacity = '0';
      btn4.setAttribute('class','actual');
      btn5.removeAttribute('class','actual');
      btn6.removeAttribute('class','actual');
      temporizador4 = setTimeout(cambioColor5, 5000);;
      clearTimeout(temporizador5);
      clearTimeout(temporizador6);
    }
    function cambioColor5() {
      foto4.style.opacity = '0';
      foto5.style.opacity = '1';
      foto6.style.opacity = '0';
      btn5.setAttribute('class','actual');
      btn4.removeAttribute('class','actual');
      btn6.removeAttribute('class','actual');
      temporizador5 = setTimeout(cambioColor6, 5000);
      clearTimeout(temporizador4);
      clearTimeout(temporizador6);
    }
    function cambioColor6() {
      foto4.style.opacity = '0';
      foto5.style.opacity = '0';
      foto6.style.opacity = '1';
      btn6.setAttribute('class','actual');
      btn5.removeAttribute('class','actual');
      btn4.removeAttribute('class','actual');
      temporizador6 = setTimeout(cambioColor4, 5000);;
      clearTimeout(temporizador5);
      clearTimeout(temporizador4);
    }
    
    
    btn4.addEventListener('click', cambioColor4);
    btn5.addEventListener('click', cambioColor5);
    btn6.addEventListener('click', cambioColor6);

    // CAROUSEL KINESIO //

    var btn7 = document.getElementById("7");
    var btn8 = document.getElementById("8");
    var btn9 = document.getElementById("9");
    var foto7 = document.getElementById("foto7");
    var foto8 = document.getElementById("foto8");
    var foto9 = document.getElementById("foto9");

    let temporizador7;
    let temporizador8;
    let temporizador9;

    clearTimeout(temporizador8);
    clearTimeout(temporizador9);

    function cambioColor7() {
      foto7.style.opacity = '1';
      foto8.style.opacity = '0';
      foto9.style.opacity = '0';
      btn7.setAttribute('class','actual');
      btn8.removeAttribute('class','actual');
      btn9.removeAttribute('class','actual');
      temporizador7 = setTimeout(cambioColor8, 5000);;
      clearTimeout(temporizador8);
      clearTimeout(temporizador9);
    }
    function cambioColor8() {
      foto7.style.opacity = '0';
      foto8.style.opacity = '1';
      foto9.style.opacity = '0';
      btn8.setAttribute('class','actual');
      btn7.removeAttribute('class','actual');
      btn9.removeAttribute('class','actual');
      temporizador8 = setTimeout(cambioColor9, 5000);
      clearTimeout(temporizador7);
      clearTimeout(temporizador9);
    }
    function cambioColor9() {
      foto7.style.opacity = '0';
      foto8.style.opacity = '0';
      foto9.style.opacity = '1';
      btn9.setAttribute('class','actual');
      btn8.removeAttribute('class','actual');
      btn7.removeAttribute('class','actual');
      temporizador9 = setTimeout(cambioColor7, 5000);;
      clearTimeout(temporizador8);
      clearTimeout(temporizador7);
    }
    
    
    btn7.addEventListener('click', cambioColor7);
    btn8.addEventListener('click', cambioColor8);
    btn9.addEventListener('click', cambioColor9);

// CAROUSEL ENCRIPTADOR //

    var btn10 = document.getElementById("10");
    var btn11 = document.getElementById("11");
    var btn12 = document.getElementById("12");
    var foto10 = document.getElementById("foto10");
    var foto11 = document.getElementById("foto11");
    var foto12 = document.getElementById("foto12");

    let temporizador10;
    let temporizador11;
    let temporizador12;

    clearTimeout(temporizador11);
    clearTimeout(temporizador12);

    function cambioColor10() {
      foto10.style.opacity = '1';
      foto11.style.opacity = '0';
      foto12.style.opacity = '0';
      btn10.setAttribute('class','actual');
      btn11.removeAttribute('class','actual');
      btn12.removeAttribute('class','actual');
      temporizador10 = setTimeout(cambioColor11, 5000);;
      clearTimeout(temporizador11);
      clearTimeout(temporizador12);
    }
    function cambioColor11() {
      foto10.style.opacity = '0';
      foto11.style.opacity = '1';
      foto12.style.opacity = '0';
      btn11.setAttribute('class','actual');
      btn10.removeAttribute('class','actual');
      btn12.removeAttribute('class','actual');
      temporizador11 = setTimeout(cambioColor12, 5000);
      clearTimeout(temporizador10);
      clearTimeout(temporizador12);
    }
    function cambioColor12() {
      foto10.style.opacity = '0';
      foto11.style.opacity = '0';
      foto12.style.opacity = '1';
      btn12.setAttribute('class','actual');
      btn11.removeAttribute('class','actual');
      btn10.removeAttribute('class','actual');
      temporizador12 = setTimeout(cambioColor10, 5000);;
      clearTimeout(temporizador11);
      clearTimeout(temporizador10);
    }
    
    
    btn10.addEventListener('click', cambioColor10);
    btn11.addEventListener('click', cambioColor11);
    btn12.addEventListener('click', cambioColor12);

// CAROUSEL AHORCADO //

    var btn13 = document.getElementById("13");
    var btn14 = document.getElementById("14");
    var btn15 = document.getElementById("15");
    var foto13 = document.getElementById("foto13");
    var foto14 = document.getElementById("foto14");
    var foto15 = document.getElementById("foto15");

    let temporizador13;
    let temporizador14;
    let temporizador15;

    clearTimeout(temporizador14);
    clearTimeout(temporizador15);

    function cambioColor13() {
      foto13.style.opacity = '1';
      foto14.style.opacity = '0';
      foto15.style.opacity = '0';
      btn13.setAttribute('class','actual');
      btn14.removeAttribute('class','actual');
      btn15.removeAttribute('class','actual');
      temporizador13 = setTimeout(cambioColor14, 5000);;
      clearTimeout(temporizador14);
      clearTimeout(temporizador15);
    }
    function cambioColor14() {
      foto13.style.opacity = '0';
      foto14.style.opacity = '1';
      foto15.style.opacity = '0';
      btn14.setAttribute('class','actual');
      btn13.removeAttribute('class','actual');
      btn15.removeAttribute('class','actual');
      temporizador14 = setTimeout(cambioColor15, 5000);
      clearTimeout(temporizador13);
      clearTimeout(temporizador15);
    }
    function cambioColor15() {
      foto13.style.opacity = '0';
      foto14.style.opacity = '0';
      foto15.style.opacity = '1';
      btn15.setAttribute('class','actual');
      btn14.removeAttribute('class','actual');
      btn13.removeAttribute('class','actual');
      temporizador15 = setTimeout(cambioColor13, 5000);;
      clearTimeout(temporizador14);
      clearTimeout(temporizador13);
    }
    
    
    btn13.addEventListener('click', cambioColor13);
    btn14.addEventListener('click', cambioColor14);
    btn15.addEventListener('click', cambioColor15);

    // CAROUSEL PORTFOLIO //

    var btn16 = document.getElementById("16");
    var btn17 = document.getElementById("17");
    var btn18 = document.getElementById("18");
    var foto16 = document.getElementById("foto16");
    var foto17 = document.getElementById("foto17");
    var foto18 = document.getElementById("foto18");

    let temporizador16;
    let temporizador17;
    let temporizador18;

    clearTimeout(temporizador17);
    clearTimeout(temporizador18);

    function cambioColor16() {
      foto16.style.opacity = '1';
      foto17.style.opacity = '0';
      foto18.style.opacity = '0';
      btn16.setAttribute('class','actual');
      btn17.removeAttribute('class','actual');
      btn18.removeAttribute('class','actual');
      temporizador16 = setTimeout(cambioColor17, 5000);;
      clearTimeout(temporizador17);
      clearTimeout(temporizador18);
    }
    function cambioColor17() {
      foto16.style.opacity = '0';
      foto17.style.opacity = '1';
      foto18.style.opacity = '0';
      btn17.setAttribute('class','actual');
      btn16.removeAttribute('class','actual');
      btn18.removeAttribute('class','actual');
      temporizador17 = setTimeout(cambioColor18, 5000);
      clearTimeout(temporizador16);
      clearTimeout(temporizador18);
    }
    function cambioColor18() {
      foto16.style.opacity = '0';
      foto17.style.opacity = '0';
      foto18.style.opacity = '1';
      btn18.setAttribute('class','actual');
      btn17.removeAttribute('class','actual');
      btn16.removeAttribute('class','actual');
      temporizador18 = setTimeout(cambioColor16, 5000);;
      clearTimeout(temporizador17);
      clearTimeout(temporizador16);
    }
    
    
    btn16.addEventListener('click', cambioColor16);
    btn17.addEventListener('click', cambioColor17);
    btn18.addEventListener('click', cambioColor18);

    // CAROUSEL PLANTILLA //

    var btn19 = document.getElementById("19");
    var btn20 = document.getElementById("20");
    var btn21 = document.getElementById("21");
    var foto19 = document.getElementById("foto19");
    var foto20 = document.getElementById("foto20");
    var foto21 = document.getElementById("foto21");

    let temporizador19;
    let temporizador20;
    let temporizador21;

    clearTimeout(temporizador20);
    clearTimeout(temporizador21);

    function cambioColor19() {
      foto19.style.opacity = '1';
      foto20.style.opacity = '0';
      foto21.style.opacity = '0';
      btn19.setAttribute('class','actual');
      btn20.removeAttribute('class','actual');
      btn21.removeAttribute('class','actual');
      temporizador19 = setTimeout(cambioColor20, 5000);;
      clearTimeout(temporizador20);
      clearTimeout(temporizador21);
    }
    function cambioColor20() {
      foto19.style.opacity = '0';
      foto20.style.opacity = '1';
      foto21.style.opacity = '0';
      btn20.setAttribute('class','actual');
      btn19.removeAttribute('class','actual');
      btn21.removeAttribute('class','actual');
      temporizador20 = setTimeout(cambioColor21, 5000);
      clearTimeout(temporizador19);
      clearTimeout(temporizador21);
    }
    function cambioColor21() {
      foto19.style.opacity = '0';
      foto20.style.opacity = '0';
      foto21.style.opacity = '1';
      btn21.setAttribute('class','actual');
      btn20.removeAttribute('class','actual');
      btn19.removeAttribute('class','actual');
      temporizador21 = setTimeout(cambioColor19, 5000);;
      clearTimeout(temporizador20);
      clearTimeout(temporizador19);
    }
    
    
    btn19.addEventListener('click', cambioColor19);
    btn20.addEventListener('click', cambioColor20);
    btn21.addEventListener('click', cambioColor21);

    // CAROUSEL BANCO //

    var btn22 = document.getElementById("22");
    var btn23 = document.getElementById("23");
    var btn24 = document.getElementById("24");
    var foto22 = document.getElementById("foto22");
    var foto23 = document.getElementById("foto23");
    var foto24 = document.getElementById("foto24");

    let temporizador22;
    let temporizador23;
    let temporizador24;

    clearTimeout(temporizador23);
    clearTimeout(temporizador24);

    function cambioColor22() {
      foto22.style.opacity = '1';
      foto23.style.opacity = '0';
      foto24.style.opacity = '0';
      btn22.setAttribute('class','actual');
      btn23.removeAttribute('class','actual');
      btn24.removeAttribute('class','actual');
      temporizador22 = setTimeout(cambioColor23, 5000);;
      clearTimeout(temporizador23);
      clearTimeout(temporizador24);
    }
    function cambioColor23() {
      foto22.style.opacity = '0';
      foto23.style.opacity = '1';
      foto24.style.opacity = '0';
      btn23.setAttribute('class','actual');
      btn22.removeAttribute('class','actual');
      btn24.removeAttribute('class','actual');
      temporizador23 = setTimeout(cambioColor24, 5000);
      clearTimeout(temporizador22);
      clearTimeout(temporizador24);
    }
    function cambioColor24() {
      foto22.style.opacity = '0';
      foto23.style.opacity = '0';
      foto24.style.opacity = '1';
      btn24.setAttribute('class','actual');
      btn23.removeAttribute('class','actual');
      btn22.removeAttribute('class','actual');
      temporizador24 = setTimeout(cambioColor22, 5000);;
      clearTimeout(temporizador23);
      clearTimeout(temporizador22);
    }
    
    
    btn22.addEventListener('click', cambioColor22);
    btn23.addEventListener('click', cambioColor23);
    btn24.addEventListener('click', cambioColor24);

// CAROUSEL PEDIDOS //

    var btn25 = document.getElementById("25");
    var btn26 = document.getElementById("26");
    var btn27 = document.getElementById("27");
    var foto25 = document.getElementById("foto25");
    var foto26 = document.getElementById("foto26");
    var foto27 = document.getElementById("foto27");

    let temporizador25;
    let temporizador26;
    let temporizador27;

    clearTimeout(temporizador26);
    clearTimeout(temporizador27);

    function cambioColor25() {
      foto25.style.opacity = '1';
      foto26.style.opacity = '0';
      foto27.style.opacity = '0';
      btn25.setAttribute('class','actual');
      btn26.removeAttribute('class','actual');
      btn27.removeAttribute('class','actual');
      temporizador25 = setTimeout(cambioColor26, 5000);;
      clearTimeout(temporizador26);
      clearTimeout(temporizador27);
    }
    function cambioColor26() {
      foto25.style.opacity = '0';
      foto26.style.opacity = '1';
      foto27.style.opacity = '0';
      btn26.setAttribute('class','actual');
      btn25.removeAttribute('class','actual');
      btn27.removeAttribute('class','actual');
      temporizador26 = setTimeout(cambioColor27, 5000);
      clearTimeout(temporizador25);
      clearTimeout(temporizador27);
    }
    function cambioColor27() {
      foto25.style.opacity = '0';
      foto26.style.opacity = '0';
      foto27.style.opacity = '1';
      btn27.setAttribute('class','actual');
      btn26.removeAttribute('class','actual');
      btn25.removeAttribute('class','actual');
      temporizador27 = setTimeout(cambioColor25, 5000);;
      clearTimeout(temporizador26);
      clearTimeout(temporizador25);
    }
    
    
    btn25.addEventListener('click', cambioColor25);
    btn26.addEventListener('click', cambioColor26);
    btn27.addEventListener('click', cambioColor27);

    