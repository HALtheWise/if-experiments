var Event = function(type, data) {
	if (type===undefined) {
		type = Event.CUSTOM;
	}
	if (data===undefined) {
		data = {};
	}
	
	this.type = type;
	this.data = data;
}

Event.CUSTOM = 'CUSTOM'
Event.ATTACK = 'ATTACK'
Event.STATUS_HEALTH = 'HEALTH'

module.exports = Event