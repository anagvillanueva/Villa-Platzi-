var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(5,10);
console.log(cantidad);
function dibujar()
{
  if(fondo.cargaOK)
  {
      papel.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOK)
  {
     for(var v = 0; v<cantidad;v++)
     {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      var y = y*80;
      var x = x*80;
      papel.drawImage(vaca.objeto, x, y);
     } 
    
  }
  if(cerdo.cargaOK)
  {
    for (var c=0; c<cantidad; c++)
    {
    var x = aleatorio(0, 2);
    var y = aleatorio(0, 2); 
    var y = y*80;
    var x = x*80;
    papel.drawImage(cerdo.objeto, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    for (var p = 0; p<cantidad;p++)
    {
    var x = aleatorio(0, 6);
    var y = aleatorio(0, 6);
    var y = y*80;
    var x = x*80;
    papel.drawImage(pollo.objeto, x, y);
    }
  }
}

function cargarFondo()
{
    fondo.cargaOK=true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK=true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK=true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargaOK=true;
    dibujar();
}


fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}