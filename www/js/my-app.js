// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
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
      { path: '/about/', url: 'about.html', },
      { path: '/about/', url: 'about.html', },
      { path: '/about/', url: 'about.html', },

    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

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
