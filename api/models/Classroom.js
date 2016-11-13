/**
 * Classroom.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'sqlitedb',
	tableName: 'Classroom',
	attributes: {
		ClassroomID: {
			type: 'integer',
			required: true
		},
		Building: {
			type: 'integer',
			required: true
		},
		RoomNumber: {
			type: 'integer',
			required: true
		},
		Capacity: {
			type: 'integer',
			required: true
		}
	}
};

