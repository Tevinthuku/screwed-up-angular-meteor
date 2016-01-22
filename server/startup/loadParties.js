 Meteor.startup(function () {
        if (Parties.find().count() === 0){
            var parties = [
                    {
                        'name': 'Dubstep-Free Zone',
                        'description': 'Fast just go faster with nex'
                    },
                    
                    {
                        'name': 'All the dubstep all the time',
                        'descrition': 'Get on it'
                    }
                ]
        }
    });