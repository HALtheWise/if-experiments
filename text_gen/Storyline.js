var Event = require('./Event')

var Storyline = function () {
	this.events = [];
};

Storyline.prototype.add = function(event) {
	this.events.push(event)
};

Storyline.prototype.to_phrases = function() {
	phrases = []
	var i = 0;
	for (var i = 0; i < this.events.length; ) {

		var handled = false;
		for (var j = 0; j < generators.length; j++) {

			try {
				var res = generators[j](this.events.slice(i))
			} 
			catch (e) {
				continue
			}

			if (res !== undefined){
				// We found a generator that works!

				i += res.consumed;
				phrases.push(res.phrase);
				handled = true;
				break;
			}
		}

		if (!handled){
			console.log("ERROR: Unable to find generator for " + 
				JSON.stringify(this.events[i]) + '!')
			i += 1;
		}

	}

	return phrases
}

// Generators are listed in order from high-priority to low-priority.
// They are functions that take an event list and optionally process it.
var generators = [
	function(events) {
		e = events[0]
		if (e.type == Event.ATTACK && e.data.actor && e.data.target){
			str = [e.data.actor, "attacks", e.data.target]
			return {consumed: 1, phrase: str}	
		}
	},
	
	function(events) {
		e = events[0]
		str = ['No Generator found! ', JSON.stringify(e)]
		return {consumed: 1, phrase: str}
	},

]

module.exports = Storyline