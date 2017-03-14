angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menuTatuBus.tatuBus', {
    url: '/tatuibus_home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tatuBus.html',
        controller: 'tatuBusCtrl'
      }
    }
  })

  .state('menuTatuBus', {
    url: '/menu_hamburger',
    templateUrl: 'templates/menuTatuBus.html',
    controller: 'menuTatuBusCtrl'
  })

  .state('menuTatuBus.colinaDasEstrelas', {
    url: '/colina_das_estrelas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/colinaDasEstrelas.html',
        controller: 'colinaDasEstrelasCtrl'
      }
    }
  })

  .state('menuTatuBus.sOCristovOAstRia', {
    url: '/sao_cristovao',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sOCristovOAstRia.html',
        controller: 'sOCristovOAstRiaCtrl'
      }
    }
  })

  .state('menuTatuBus.sOCristovOAstRia2', {
    url: '/sao_cristovao_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sOCristovOAstRia2.html',
        controller: 'sOCristovOAstRia2Ctrl'
      }
    }
  })

  .state('menuTatuBus.sOCristovOAstRia3', {
    url: '/sao_cristovao_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sOCristovOAstRia3.html',
        controller: 'sOCristovOAstRia3Ctrl'
      }
    }
  })

  .state('menuTatuBus.mirandas', {
    url: '/mirandas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mirandas.html',
        controller: 'mirandasCtrl'
      }
    }
  })

  .state('menuTatuBus.mirandas2', {
    url: '/mirandas_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mirandas2.html',
        controller: 'mirandas2Ctrl'
      }
    }
  })

  .state('menuTatuBus.mirandas3', {
    url: '/mirandas_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mirandas3.html',
        controller: 'mirandas3Ctrl'
      }
    }
  })

  .state('menuTatuBus.jardimGramado', {
    url: '/jardimGramado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jardimGramado.html',
        controller: 'jardimGramadoCtrl'
      }
    }
  })

  .state('menuTatuBus.jardimGramado2', {
    url: '/jardimGramado_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jardimGramado2.html',
        controller: 'jardimGramado2Ctrl'
      }
    }
  })

  .state('menuTatuBus.jardimGramado3', {
    url: '/jardimGramado_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jardimGramado3.html',
        controller: 'jardimGramado3Ctrl'
      }
    }
  })

  .state('menuTatuBus.inocoop', {
    url: '/inocoop',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inocoop.html',
        controller: 'inocoopCtrl'
      }
    }
  })

  .state('menuTatuBus.santaRita', {
    url: '/santa_rita',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santaRita.html',
        controller: 'santaRitaCtrl'
      }
    }
  })

  .state('menuTatuBus.vilaAngLica', {
    url: '/vila_angelica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vilaAngLica.html',
        controller: 'vilaAngLicaCtrl'
      }
    }
  })

  .state('menuTatuBus.vilaEsperanAJdWanderley', {
    url: '/esperanca',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vilaEsperanAJdWanderley.html',
        controller: 'vilaEsperanAJdWanderleyCtrl'
      }
    }
  })

  .state('menuTatuBus.vilaEsperanAJdWanderley2', {
    url: '/esperanca_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vilaEsperanAJdWanderley2.html',
        controller: 'vilaEsperanAJdWanderley2Ctrl'
      }
    }
  })

  .state('menuTatuBus.vilaEsperanAJdWanderley3', {
    url: '/esperanca_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vilaEsperanAJdWanderley3.html',
        controller: 'vilaEsperanAJdWanderley3Ctrl'
      }
    }
  })

  .state('menuTatuBus.vilaAngLica2', {
    url: '/vila_angelica_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vilaAngLica2.html',
        controller: 'vilaAngLica2Ctrl'
      }
    }
  })

  .state('menuTatuBus.vilaAngLica3', {
    url: '/vila_angelica_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vilaAngLica3.html',
        controller: 'vilaAngLica3Ctrl'
      }
    }
  })

  .state('menuTatuBus.santaRita2', {
    url: '/santa_rita_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santaRita2.html',
        controller: 'santaRita2Ctrl'
      }
    }
  })

  .state('menuTatuBus.santaRita3', {
    url: '/santa_rita_especiais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santaRita3.html',
        controller: 'santaRita3Ctrl'
      }
    }
  })

  .state('menuTatuBus.santaRita4', {
    url: '/santa_rita_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santaRita4.html',
        controller: 'santaRita4Ctrl'
      }
    }
  })

  .state('menuTatuBus.inocoop2', {
    url: '/inocoop_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inocoop2.html',
        controller: 'inocoop2Ctrl'
      }
    }
  })

  .state('menuTatuBus.inocoop3', {
    url: '/inocoop_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inocoop3.html',
        controller: 'inocoop3Ctrl'
      }
    }
  })

  .state('menuTatuBus.gralhaAzul', {
    url: '/gralha_azul',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gralhaAzul.html',
        controller: 'gralhaAzulCtrl'
      }
    }
  })

  .state('menuTatuBus.enxovia', {
    url: '/enxovia_SegSex',
    views: {
      'side-menu21': {
        templateUrl: 'templates/enxovia.html',
        controller: 'enxoviaCtrl'
      }
    }
  })

  .state('menuTatuBus.colinaDasEstrelas2', {
    url: '/colina_das_estrelas_sab',
    views: {
      'side-menu21': {
        templateUrl: 'templates/colinaDasEstrelas2.html',
        controller: 'colinaDasEstrelas2Ctrl'
      }
    }
  })

  .state('menuTatuBus.santistaJdLRioAmericana', {
    url: '/santista',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santistaJdLRioAmericana.html',
        controller: 'santistaJdLRioAmericanaCtrl'
      }
    }
  })

  .state('menuTatuBus.santistaJdLRioAmericana2', {
    url: '/santista_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santistaJdLRioAmericana2.html',
        controller: 'santistaJdLRioAmericana2Ctrl'
      }
    }
  })

  .state('menuTatuBus.santistaJdLRioAmericana3', {
    url: '/santista_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/santistaJdLRioAmericana3.html',
        controller: 'santistaJdLRioAmericana3Ctrl'
      }
    }
  })

  .state('menuTatuBus.enxovia2', {
    url: '/enxovia_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/enxovia2.html',
        controller: 'enxovia2Ctrl'
      }
    }
  })

  .state('menuTatuBus.enxovia3', {
    url: '/enxovia_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/enxovia3.html',
        controller: 'enxovia3Ctrl'
      }
    }
  })

  .state('menuTatuBus.colinaDasEstrelas3', {
    url: '/colina_das_estrelas_esp',
    views: {
      'side-menu21': {
        templateUrl: 'templates/colinaDasEstrelas3.html',
        controller: 'colinaDasEstrelas3Ctrl'
      }
    }
  })

  .state('menuTatuBus.guarap', {
    url: '/guarapo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guarap.html',
        controller: 'guarapCtrl'
      }
    }
  })

  .state('menuTatuBus.palanque', {
    url: '/palanque',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palanque.html',
        controller: 'palanqueCtrl'
      }
    }
  })

  .state('menuTatuBus.palanque2', {
    url: '/palanque_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palanque2.html',
        controller: 'palanque2Ctrl'
      }
    }
  })

  .state('menuTatuBus.lopesco', {
    url: '/lopesco',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lopesco.html',
        controller: 'lopescoCtrl'
      }
    }
  })

  .state('menuTatuBus.guarap2', {
    url: '/guarapo_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guarap2.html',
        controller: 'guarap2Ctrl'
      }
    }
  })

  .state('menuTatuBus.sanRaphaelColinaVerde', {
    url: '/san_raphael',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sanRaphaelColinaVerde.html',
        controller: 'sanRaphaelColinaVerdeCtrl'
      }
    }
  })

  .state('menuTatuBus.sanRaphaelColinaVerde2', {
    url: '/san_raphael_sabado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sanRaphaelColinaVerde2.html',
        controller: 'sanRaphaelColinaVerde2Ctrl'
      }
    }
  })

  .state('menuTatuBus.sanRaphaelColinaVerde3', {
    url: '/san_raphael_domingo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sanRaphaelColinaVerde3.html',
        controller: 'sanRaphaelColinaVerde3Ctrl'
      }
    }
  })

  .state('menuTatuBus.sobre', {
    url: '/sobre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu_hamburger/tatuibus_home')

  

});