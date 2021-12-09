const events = require("events");
const util = require('util');

const teams = function(name) {
    this.name = name;
};

util.inherits( teams, events.EventEmitter);

const arsenal = new teams('Arsenal');
const juventus = new teams('Juventus');
const galatasaray = new teams('Galatasaray');

const teamArray = [arsenal,juventus,galatasaray];

teamArray.forEach((team)=> {
    team.on('nation', function(nation){
        console.log(team.name + ' is '+ nation+ ' football club'); 
    });
});


arsenal.emit('nation','English');
juventus.emit('nation','Italy');
galatasaray.emit('nation','Turkish');