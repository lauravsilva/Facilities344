/**
 * ClassReservation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'sqlitedb',
	tableName: 'ClassReservation',
	attributes: {
		ClassReservationID: {
			type: 'integer',
			primaryKey: true
		},
		InstructorID: {
			type: 'integer'
		},
		ClassID: {
			type: 'integer'
		},
		ClassroomID: {
			type: 'integer',
			required: true
		},
		StartDate: {
			type: 'date'
		},
		EndDate: {
			type: 'date'
		}
	}
};

