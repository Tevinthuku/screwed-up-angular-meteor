angular.module('socially').directive('partyDetails', function() {
   return {
       restrict: 'E',
       templateUrl: 'client/parties/party-details/party-details.html',
       controllerAs: 'partyDetails',
       controller: function($scope, $stateParams, $reactive) {
           $reactive(this).attach($scope);
           
           this.subscribe('users');
           
           this.helpers({
               party: () => {
                   return Parties.findOne({ _id: $stateParams.partyId });
               },
            users: () => {
                return Meteor.users.find({});
            }   
           });
           this.save = () => {
             Parties.update.findOne({_id: $stateParams.partyId}, {
               $set: {
                   name: this.party.name,
                   description: this.party.description,
                   'public': this.party.public
               }  
             }); 
           };
       }
   } 
});
