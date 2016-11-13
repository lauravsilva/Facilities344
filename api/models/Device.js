/**
 * Device.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'sqlitedb',
	tableName: 'Device',
	attributes: {
		DeviceID: {
			type: 'integer',
			required: true
		},
		DeviceType: {
			type: 'string',
			required: true
		}
	}
};

