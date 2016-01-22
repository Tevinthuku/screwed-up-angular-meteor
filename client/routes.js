angular.module('socially').config(function ($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('parties', {
          url: '/parties',
          template: '<parties-list></parties-list>'
      })
      .state('partyDetails', {
          url:'/parties/:partyId',
          template: '<party-details></partydetails>',
          resolve: {
              currentUser: ($q) => {
                  if (Meteor.userId() == null) {
                      return $q.reject('AUTH_REQUIRED');
                  }
                  else {
                      return $q.resolve();
                  }
              }
          }
      });
      
      
      $urlRouterProvider.otherwise("/parties");
})
.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromSate, formParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('parties');
        }
    });
});