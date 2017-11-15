var Event = require('./Event')
var Storyline = require('./Storyline')

function test_simulation(storyline) {
	storyline.add(new Event(Event.ATTACK, {actor: 'bob', target: 'me'}))
	storyline.add(new Event(Event.STATUS_HEALTH, {actor: 'me', value: 10}))
}

story = new Storyline()

test_simulation(story)
console.log(story)
console.log(story.to_phrases())