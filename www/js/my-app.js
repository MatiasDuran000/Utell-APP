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
      { path: '/about/', url: 'about.html', },
      { path: '/about/', url: 'about.html', },

    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var urlAPI="http://utell.grupophi.com/api/";

var nombre="",apellido="",email="";

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


  
})

$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
  
    
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

                console.log(data);
                var datos = JSON.parse(data); 
                console.log("OK");
                //idUsuario = datos.id;
                idUsuario = datos[0].idUsuario;
                nombre = datos[0].nombre;
                apellido = datos[0].apellido;
                console.log(nombre);
                idUsuario=0;
                if (idUsuario>0) {
                    mainView.router.navigate("/perfil/");
                } else {
                  app.dialog.alert(data);
                }
            
    });



}

