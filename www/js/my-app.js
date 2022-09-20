// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'U-Tell',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      { path: '/about/', url: 'about.html', },
      { path: '/registrarse/', url: 'registrarse.html', },
      { path: '/miPerfil/', url: 'miPerfil.html', },
      { path: '/perfil/', url: 'perfil.html', },
      { path: '/feed/', url: 'feed.html', },
      { path: '/busqueda/', url: 'busqueda.html', },
      { path: '/config/', url: 'configuracion.html', },
      { path: '/editarPerfil/', url: 'editarPerfil.html', },
      { path: '/preferencias/', url: 'preferencias.html', },
      { path: '/notifConfig/', url: 'notifConfig.html', },
      { path: '/accesibilidad/', url: 'accesibilidad.html', },
      { path: '/cambiarPass/', url: 'cambiarPass.html', },
      { path: '/ayuda/', url: 'ayuda.html', },
      { path: '/reportarProblema/', url: 'reportarProblema.html', },
      { path: '/privSeg/', url: 'privSeg.html', },
      { path: '/faq/', url: 'faq.html', },
      { path: '/ubicacionesPref/', url: 'ubicacionesPref.html', },
      { path: '/universidadesPref/', url: 'universidadesPref.html', },
      { path: '/carrerasPref/', url: 'carrerasPref.html', },
      { path: '/perfil/', url: 'perfil.html', },
      { path: '/md/', url: 'MD.html', },
      { path: '/amigos/', url: 'amigos.html', },


    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var urlAPI="http://utell.grupophi.com/api/";

var nombre="",apellido="",email="",idUsuario=0,fNac="",fotoPerfil="",celular="",tipoPerfil="",descripcion="",trayectoria="",idCiudad="";

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e,page) {
    if (page.name=="index" || page.name=="registrarse" ) {
      ocultaNavTool();
    } else {
      muestraNavTool();
    }
})

// Option 2. Using live 'page:init' event handlers for each page

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  $$("#indexLogin").on("click", fnLogin);

  $$(".botonToolbar").on("click",function(){
    var botonId = this.id;

    console.log(botonId)
    if($$("#"+botonId).has("encendido"))
    {}
    else 
    {
      $$(".botonToolbar").removeClass("encendido");
      $$("#"+botonId).addClass("encendido");
    }

    fnBotonToolbar(botonId);
  })
})


$$(document).on('page:init', '.page[data-name="miPerfil"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  cargarMiPerfil();
  $$("#config").on("click", function(){mainView.router.navigate("/config/");});
  $$("#amigos").on("click", function(){mainView.router.navigate("/amigos/");});
  $$("#misXPs").on("click", function(){mainView.router.navigate("/misXPs/");});
  $$("#misConsultas").on("click", function(){mainView.router.navigate("/misConsultas/");});
  $$("#borradores").on("click", function(){mainView.router.navigate("/borradores/");});
  $$("#elementosGuardados").on("click", function(){mainView.router.navigate("/elementosGuardados/");});
})

$$(document).on('page:init', '.page[data-name="config"]', function (e) {
  $$("#volverConfig").on("click",function(){mainView.router.navigate("/miPerfil/");})
  
  $$("#editarPerfil").on("click", function(){mainView.router.navigate("/editarPerfil/");});
  $$("#preferencias").on("click", function(){mainView.router.navigate("/preferencias/");});
  $$("#notifConfig").on("click", function(){mainView.router.navigate("/notifConfig/");});
  $$("#accesibilidad").on("click", function(){mainView.router.navigate("/accesibilidad/");});
  $$("#cambiarPass").on("click", function(){mainView.router.navigate("/cambiarPass/");});
  $$("#ayuda").on("click", function(){mainView.router.navigate("/ayuda/");});
})

$$(document).on('page:init', '.page[data-name="feed"]', function (e) {
  $$("#botonFeed1").on("click", function() {
    $$("#botonFeed1").removeClass("inactivo").addClass("activo");
    $$("#botonFeed2").removeClass("activo").addClass("inactivo");
    //fnListaFeedsParaTi();
  } );

  $$("#botonFeed2").on("click", function() {
    $$("#botonFeed2").removeClass("inactivo").addClass("activo");
    $$("#botonFeed1").removeClass("activo").addClass("inactivo");
    //fnListaFeedsTuRed();
  });

})

$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
})

$$(document).on('page:init', '.page[data-name="busqueda"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
})

$$(document).on('page:init', '.page[data-name="editarPerfil"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  $$("#volverEditarPerfil").on("click",function(){mainView.router.navigate("/config/");});
  
  if(tipoPerfil!="") {
    $$("#editarPerfilImg").attr("src", fotoPerfil);
  }

})

$$(document).on('page:init', '.page[data-name="notifConfig"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized

  $$("#volverNotifConfig").on("click",function(){mainView.router.navigate("/config/");});

  $$(".interruptor").on("click",function(){
    var elId = this.id;

    console.log(elId)
    if($$("#"+elId).hasClass("activado"))
    {
      $$("#"+elId).removeClass("activado").addClass("desactivado");
    }
    else 
    {
      $$("#"+elId).removeClass("desactivado").addClass("activado");
    }

    fnInterruptor();
  })

})

$$(document).on('page:init', '.page[data-name="accesibilidad"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  $$("#volverAccesibilidad").on("click",function(){mainView.router.navigate("/config/");});

})

$$(document).on('page:init', '.page[data-name="ayuda"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  $$("#volverAyuda").on("click",function(){mainView.router.navigate("/config/");});

  $$("#ReportarProblema").on("click",function(){mainView.router.navigate("/reportarProblema/");});
  $$("#PrivSeg").on("click",function(){mainView.router.navigate("/pivSeg/");});
  $$("#FAQ").on("click",function(){mainView.router.navigate("/faq/");});
})

$$(document).on('page:init', '.page[data-name="preferencias"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  $$("#volverPreferencias").on("click",function(){mainView.router.navigate("/config/");});

  $$("#ubicacionesPref").on("click",function(){mainView.router.navigate("/ubicacionesPref/");});
  $$("#universidadesPref").on("click",function(){mainView.router.navigate("/universidadesPref/");});
  $$("#carrerasPref").on("click",function(){mainView.router.navigate("/carrerasPref/");});
})

$$(document).on('page:init', '.page[data-name="perfil"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  /*
  $$("#agregarAmigo").on("click",function(){mainView.router.navigate("//");});
  $$("#botonMensaje").on("click",function(){mainView.router.navigate("//");});
  */
})

$$(document).on('page:init', '.page[data-name="amigos"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  $$("#volverAmigos").on("click",function(){mainView.router.navigate("/amigos/");});

})








function ocultaNavTool() {
  $$(".navbar").addClass("oculto").removeClass("visible");
  $$(".toolbar").addClass("oculto").removeClass("visible");
  $$(".page").addClass("no-toolbar").addClass("no-navbar");

}

function muestraNavTool() {
  $$(".navbar").addClass("visible").removeClass("oculto");
  $$(".toolbar").addClass("visible").removeClass("oculto");
  $$(".page").removeClass("no-toolbar").removeClass("no-navbar");
}










/* MIS FUNCIONES */
function fnLogin() {
  email = $$("#indexEmail").val();
  pass = $$("#indexPass").val();

  url = urlAPI+"login";
    app.request.post(url, { email: email, password: pass }, function(data) {

                var datos = JSON.parse(data); 
                idUsuario = parseInt(datos[0].idUsuario);
                nombre = datos[0].nombre;
                apellido = datos[0].apellido;              
                fNac=datos[0].fNac;
                fotoPerfil=datos[0].fotoPerfil;
                celular=datos[0].celular;
                tipoPerfil=datos[0].tipoPerfil;
                descripcion=datos[0].descripcion;
                trayectoria=datos[0].trayectoria;
                idCiudad=datos[0].idCiudad;
                if (idUsuario>0) {
                    mainView.router.navigate("/miPerfil/");
                } else {
                  app.dialog.alert(data);
                }
            
    });
}

function cargarMiPerfil(){

  if(tipoPerfil!="") {
    $$("#miPerfilImg").attr("src",fotoPerfil);
  }
  $$("#miPerfilNyA").html(nombre + " " + apellido);
  $$("#miPerfilTipo").html(tipoPerfil);
  $$("#miPerfilCiudad").html(idCiudad);
  $$("#miPerfilEdad").html(fNac);
}

function fnInterruptor()
{
  $$(".activado").attr("src","img/Activado.svg");
  $$(".desactivado").attr("src","img/Desactivado.svg");
}

function fnBotonToolbar()
{
  switch(botonId)
  {
    case homeBoton:
      mainView.router.navigate("/feed/");
    break;
    case searchBoton:
      mainView.router.navigate("/busqueda/");
    break;
    case mdBoton:
      mainView.router.navigate("/md/");
    break;
    case perfilBoton:
      mainView.router.navigate("/miPerfil/");
    break;
  }
}