// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var API = {
    'token_name': 'APP-TOKEN', // EL NOMBRE DEL TOKEN QUE HAN DEFINIDO PARA SU API
    'base_url': 'http://deliveryiguazu.com/delApi/public/' // LA URL DE SU API
};


angular.module('starter', ['ionic', 'starter.controllers', 'starter.routes', 'starter.services', 'starter.directives', 'nl2br', 'monospaced.elastic','lexacode.mercadopago'])
        .config(function ($ionicConfigProvider) {
            //Added config
            $ionicConfigProvider.views.maxCache(5);
            $ionicConfigProvider.scrolling.jsScrolling(false);
            $ionicConfigProvider.tabs.position('bottom'); // other values: top
        })
        .run(function ($ionicPlatform, $ionicHistory, $ionicPopup, $state) {

            $ionicPlatform.ready(function () {
                if (window.Connection) {

                    if (navigator.connection.type == Connection.NONE) {
                        alert('No hay conexion a internet disponible');
                         ionic.Platform.exitApp()
                        
                    } else {
                        //alert('Usted esta conectado con: '+ navigator.connection.type);
                    }
                } else {
                    alert('Cannot find Window.Connection');
                }
                cordova.plugins.notification.local.hasPermission(function (granted) {

                    //alert("Mantenga la aplicación abierta o minimizada para recibir notificaciones del estado de su pedido");
                    $ionicPopup.alert({
                        title: 'Importante',
                        content: 'Mantenga la aplicación abierta o minimizada para recibir notificaciones del estado de su pedido'
                    })


//                                
                });
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
                var BackButton = 0
                $ionicPlatform.registerBackButtonAction(function (event) {

                    if ($state.current.name == 'home' || $state.current.name == 'login' || $state.current.name == 'register'
                            || $state.current.name == 'categories' || $state.current.name == 'offer' || $state.current.name == 'cart' || $state.current.name == 'last_orders'
                            || $state.current.name == 'setting' || $state.current.name == 'setting' || $state.current.name == 'about_us' || $state.current.name == 'address') {

                        if (BackButton == 0) {

                            BackButton++;
                            window.plugins.toast.showLongCenter('Presione nuevamente para salir');
                            $timeout(function () {
                                BackButton = 0;
                            }, 1500);
                        } else {
                            ionic.Platform.exitApp()
                        }

                    } else {
                        BackButton = 0
                        $ionicHistory.goBack();
                    }

                }, 100);
            });
        })


